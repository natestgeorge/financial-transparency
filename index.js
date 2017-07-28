var argv = require("yargs").argv;
var env = argv._[0] || "prod";

var sql = require("mssql");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// express setup
var port = process.env.PORT || 1337;
var app = express();
app.listen(port);

console.log("FT server started on port "+port);

var config = require("./config");

var pool = new sql.ConnectionPool(config);

app.use(bodyParser.json());

if(env == "prod") {
   app.use(express.static(__dirname + '/dist'));
   app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/dist/index.html")));
} else {
   var requireDynamic = require;
   var compiler = requireDynamic("webpack")(requireDynamic("./webapp/webpack.config"));
   app.use(requireDynamic("webpack-dev-middleware")(compiler, {

   }));
}

// Routes

app.post('/api/search/old', searchOld);
app.post('/api/search/new', searchNew);
app.post('/api/search/old/all', searchOldAll);
app.post('/api/search/new/all', searchNewAll);
app.get('/api/funds/categories', getFundCategories);
app.get('/api/funds/old/:fundType', getOldFunds);
app.get('/api/funds/new/:fundType', getNewFunds);
app.get('/api/locations/old', getOldLocations);
app.get('/api/locations/new', getNewLocations);
// server.get('/api/fill', fillerData)

// SQL Server interactions

function searchOld(req, res, next) {
   pool.connect()
      .then(() => {

         var search = req.body;
         var filters = search.filters;

         search.end = new Date(search.end);
         search.start = new Date(search.start);

         return new sql.Request(pool)
            .input('vendor', sql.VarChar, filters.vendor)
            .input('vendorLike', sql.VarChar, w(filters.vendor))
            .input('fund', sql.VarChar, filters.fund)
            .input('location', sql.VarChar, filters.location)
            .input('endReformatted', sql.DateTime, search.end)
            .input('startReformatted', sql.DateTime, search.start)
            .input('fundType', sql.VarChar, search.fundType)
            .query`
               SELECT TOP 500 vendorName, transactionDate, amount, payType, checkNumber, poNumber, concatenatedSegments, fundDesc, locDesc, sourceObjDesc FROM dbo.fct_DcsdPaymentRegister
               INNER JOIN dbo.fct_FundWorktag ON dbo.fct_DcsdPaymentRegister.fundDesc = dbo.fct_FundWorktag.fundName
               INNER JOIN dbo.fct_FundCategory ON dbo.fct_FundWorktag.categoryRecordID = dbo.fct_FundCategory.recordID
               WHERE dbo.fct_FundCategory.categoryID = @fundType
               AND (len(@vendor) = 0 OR vendorName LIKE @vendorLike) AND (@fund IS NULL OR segment1 = @fund) AND (len(@location) = 0 OR locDesc = @location)
               AND (transactionDate <= @endReformatted AND transactionDate >= @startReformatted)
               ORDER BY transactionDate DESC
            `;
      })
      .then(result => res.send(result) && pool.close())
      .catch(err => res.sendStatus(500) && console.warn(err));
}

function searchNew(req, res, next) {
   pool.connect()
      .then(() => {
         var search = req.body;
         var filters = search.filters;

         search.end = new Date(search.end);
         search.start = new Date(search.start);

         return new sql.Request(pool)
            .input('vendor', sql.VarChar, filters.vendor)
            .input('vendorLike', sql.VarChar, w(filters.vendor))
            .input('fund', sql.VarChar, filters.fund)
            .input('location', sql.VarChar, filters.location)
            .input('endReformatted', sql.DateTime, search.end)
            .input('startReformatted', sql.DateTime, search.start)
            .input('fundType', sql.VarChar, search.fundType)
            .query`
               SELECT TOP 500 vendorName, paymentDate, paymentAmount, paymentType, checkNumber, poNumber, budgetSourceName, projectName, costCenterName, ledgerAccountName, spendCategoryName, programName, MAX(createdDate) FROM dbo.dim_WorkDayPaymentDetails
               WHERE categoryID = @fundType
               AND (len(@vendor) = 0 OR vendorName LIKE @vendorLike) AND (@fund IS NULL OR fundRecordID = @fund) AND (len(@location) = 0 OR costCenterName = @location)
               AND (paymentDate <= @endReformatted AND paymentDate >= @startReformatted)
               GROUP BY recordID, vendorName, paymentDate, paymentAmount, paymentType, checkNumber, poNumber, budgetSourceName, projectName, costCenterName, ledgerAccountName, spendCategoryName, programName
            `;
         })
         .then(result => res.send(result) && pool.close())
         .catch(err => res.sendStatus(500) && console.warn(err));
}

function searchOldAll(req, res, next) {
   pool.connect()
      .then(() => {

         var search = req.body;
         var filters = search.filters;

         search.end = new Date(search.end);
         search.start = new Date(search.start);

         return new sql.Request(pool)
            .input('vendor', sql.VarChar, filters.vendor)
            .input('vendorLike', sql.VarChar, w(filters.vendor))
            .input('fund', sql.VarChar, filters.fund)
            .input('location', sql.VarChar, filters.location)
            .input('endReformatted', sql.DateTime, search.end)
            .input('startReformatted', sql.DateTime, search.start)
            .input('fundType', sql.VarChar, search.fundType)
            .query`
               SELECT vendorName, transactionDate, amount, payType, checkNumber, poNumber, concatenatedSegments, fundDesc, locDesc, sourceObjDesc FROM dbo.fct_DcsdPaymentRegister
               INNER JOIN dbo.fct_FundWorktag ON dbo.fct_DcsdPaymentRegister.fundDesc = dbo.fct_FundWorktag.fundName
               INNER JOIN dbo.fct_FundCategory ON dbo.fct_FundWorktag.categoryRecordID = dbo.fct_FundCategory.recordID
               WHERE dbo.fct_FundCategory.categoryID = @fundType
               AND (len(@vendor) = 0 OR vendorName LIKE @vendorLike) AND (@fund IS NULL OR segment1 = @fund) AND (len(@location) = 0 OR locDesc = @location)
               AND (transactionDate <= @endReformatted AND transactionDate >= @startReformatted)
               ORDER BY transactionDate DESC
            `;
      })
      .then(result => res.send(result) && pool.close())
      .catch(err => res.sendStatus(500) && console.warn(err));
}

function searchNewAll(req, res, next) {
   pool.connect()
      .then(() => {

         var search = req.body;
         var filters = search.filters;

         search.end = new Date(search.end);
         search.start = new Date(search.start);

         return new sql.Request(pool)
            .input('vendor', sql.VarChar, filters.vendor)
            .input('vendorLike', sql.VarChar, w(filters.vendor))
            .input('fund', sql.VarChar, filters.fund)
            .input('location', sql.VarChar, filters.location)
            .input('endReformatted', sql.DateTime, search.end)
            .input('startReformatted', sql.DateTime, search.start)
            .input('fundType', sql.VarChar, search.fundType)
            .query`
               SELECT vendorName, paymentDate, paymentAmount, paymentType, checkNumber, poNumber, budgetSourceName, projectName, costCenterName, ledgerAccountName, spendCategoryName, programName FROM dbo.dim_WorkDayPaymentDetails
               WHERE categoryID = @fundType
               AND (len(@vendor) = 0 OR vendorName LIKE @vendorLike) AND (@fund IS NULL OR fundRecordID = @fund) AND (len(@location) = 0 OR costCenterName = @location)
               AND (paymentDate <= @endReformatted AND paymentDate >= @startReformatted)
               GROUP BY recordID, vendorName, paymentDate, paymentAmount, paymentType, checkNumber, poNumber, budgetSourceName, projectName, costCenterName, ledgerAccountName, spendCategoryName, programName
            `;
         })
         .then(result => res.send(result) && pool.close())
         .catch(err => res.sendStatus(500) && console.warn(err));
}

function getFundCategories(req, res, next) {
   new sql.ConnectionPool(config).connect().then(pool => {
      var fundType = req.params.fundType;
      return pool.query`
         SELECT categoryId, categoryName FROM dbo.fct_FundCategory
      `;
   })
   .then(result => res.send(result.recordset) && pool.close())
   .catch(err => res.sendStatus(500) && console.warn(err));
}

function getOldFunds(req, res, next) {
   new sql.ConnectionPool(config).connect().then(pool => {
      var fundType = req.params.fundType;
      return pool.query`
         SELECT fundSeg AS fundId, fundDesc AS fundName, category AS categoryId FROM dbo.fct_DcsdFundLookup
         WHERE category = ${fundType} OR category IS NULL
         GROUP BY fundSeg, fundDesc, category
         ORDER BY fundDesc ASC`;
   })
   .then(result => res.send(result.recordset) && pool.close())
   .catch(err => res.sendStatus(500) && console.warn(err));
}

function getNewFunds(req, res, next) {
   new sql.ConnectionPool(config).connect().then(pool => {
      var fundType = req.params.fundType;
      return pool.query`
      SELECT fundId, fundName, categoryId FROM dbo.dim_WorkdayFundDetails
      WHERE categoryId = ${fundType} OR categoryId IS NULL
      GROUP BY fundId, fundName, categoryId
      ORDER BY fundName ASC`;
   })
   .then(result => res.send(result.recordset) && pool.close())
   .catch(err => res.sendStatus(500) && console.warn(err));
}

function getNewLocations(req, res, next) {
   new sql.ConnectionPool(config).connect().then(pool => {
      return pool.query`
         SELECT costCenterName FROM dbo.fct_CostCenterWorktag
         ORDER BY costCenterName ASC
      `;
   })
   .then(result => res.send(result.recordset) && pool.close())
   .catch(err => res.sendStatus(500) && console.warn(err));
}

function getOldLocations(req, res, next) {
   new sql.ConnectionPool(config).connect().then(pool => {
      return pool.query`
         SELECT locDesc AS costCenterName FROM dbo.fct_DcsdLocationLookup
         ORDER BY locDesc ASC
      `;
   })
   .then(result => res.send(result.recordset) && pool.close())
   .catch(err => res.sendStatus(500) && console.warn(err));
}

w = (v) => {return "%"+v+"%"};
