var express = require('express')
var router = express.Router()
var db = require('./db_knex')
var pool = require('./db_pg')

router.get('/api/get/leaguedata', (req, res) => {
    pool.query(`SELECT * FROM leagues`,
        (q_err, q_res) => {
            if (q_res){
                res.json(q_res.rows);
            } else {
                res.json(q_err);
            }
    })
})


// look at npm pg-promise to make queries a bit simpler when using params (if needed)
router.get('/api/get/league/:id', (req, res) => {
    const { id } = req.params;
    pool.query(`SELECT * FROM leagues WHERE l_id=$1`, [id],
        (q_err, q_res) => {
            if (q_res){
                res.json(q_res.rows);
            } else {
                res.json(q_err);
            }
    })
})

module.exports = router




