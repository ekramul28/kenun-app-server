const router = require('express').Router()
const { division, district, upazilas } = require('../../../api/v1/Services/index')

router.get('/division', division)
router.get('/districts/:id', district)
router.get('/upazilas/:id', upazilas)


module.exports = router