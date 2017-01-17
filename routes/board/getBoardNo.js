var express = require('express');
var router = express.Router();
var dbCore = require('../../dbCore');


/* GET home page. */
router.get('/', function(req, res, next) {
    var coursePo = req.param('coursePo');
    var courseNo = req.param('courseNo');

    dbCore.dbConn.query('select `index` from Stopover where `courseIndex` = ? and `stopoverPosition` = ?', // 콜백함수
                        [courseNo, coursePo], // 파라미터
                        function (error, result) {
                            if(error){
                                res.end('<h1> result :'+ error +'</h1>'); // 출력
                            }else{
                                var index = result[0];
                                // for(key in index) { // 값 확인
                                //     console.log('key:' + key + ' / ' + 'value:' + index[key]);
                                // }
                                console.log(index);
                                getBoardNo(index['index']);
                            }
                        });

    function getBoardNo(index) {
        dbCore.dbConn.query('select `Board_No` from Board where `Course_No` = ? and `Stopover_No` = ?',
                            [courseNo,index],
                            function (error, result) {
                                if(error) {

                                    res.end('<h1> result :' + error + '</h1>'); // 출력
                                }else{
                                    var boardNo = result[0];
                                    console.log(boardNo); // 로그
                                    res.json(result[0]); // json으로 응답하기

                                    dbCore.dbConn.end(); // 디비연결종료
                                }
                            });
    }
});

module.exports = router;
