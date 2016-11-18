<?php
/**
 * ここから
 */
$timerStartTime = '2016/11/16 00:00:00';
$timerEndTime = '2016/12/1 09:00:00';
$timerEndRedirectURL = 'http://iamazurenaut.biz/success.htm';
/**
 * ここまで設定変更可
 * ここより下は設定変更不可
 */

$timerStartTime = strtotime($timerStartTime);
$timerEndTime = strtotime($timerEndTime);
$timerNow = time();
echo $timerStartTime . '_' . $timerEndTime . '_' . $timerNow . '_' . $timerEndRedirectURL;