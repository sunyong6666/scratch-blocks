'use strict';

const { blockColors } = require("scratch-gui/src/lib/themes/accent/purple");

goog.provide('Blockly.Python.extensions');

goog.require('Blockly.Python');
Blockly.Python['helloworld_hello']=function(block){
    // alert(JSON.stringify(block))
	// Blockly.Python.definitions_['from PIL import Image'] = "from PIL import Image";
    
    let code='aaaa'

	return code;
};

Blockly.Python['helloworld_strictlyEquals']=function(block){
    // alert(JSON.stringify(block))
	// Blockly.Python.definitions_['from PIL import Image'] = "from PIL import Image";
    // console.log(block)
    let ONE= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || 'False';
    let TWO= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || 'False';
    let code=`${ONE}==${TWO}`

	return [code,Blockly.Python.ORDER_NONE];
};

//开始二维码识别

Blockly.Python['robotimg_ctwodimen']=function(block){

    
    let code=''


    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['_thread.start_new_thread(robot_ai.command_task, ())'] = "_thread.start_new_thread(robot_ai.command_task, ())";
        return code;
    }else{
        return ''
    }
};
//二维码识别结果

Blockly.Python['robotimg_twodimenresult']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='robot_ai.qr'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }

	
};

//开启摄像头
Blockly.Python['robotimg_cstartCamera']=function(block){

    let state= block.getFieldValue('ONE') || 'False';
    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code
    if(state=='2'){
        code='icrobot.camera.close()\n'
    }else{
        code='icrobot.camera.open()\n'
    }
    

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//关闭摄像头
Blockly.Python['robotimg_cstopCamera']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='icrobot.camera.close()\n'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};




//开启麦克风
Blockly.Python['robotimg_cstartmicph']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='icrobot.microphone.open()\n'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//关闭麦克风
Blockly.Python['robotimg_cstopmicph']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='icrobot.microphone.close()\n'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};



//开启喇叭
Blockly.Python['robotimg_cstartmegph']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='robot.start_speaker()\n'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//关闭喇叭
Blockly.Python['robotimg_cstopmegph']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='robot.close_speaker()\n'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};


//开启图传
// Blockly.Python['robotimg_cstartTranser']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let code='_thread.start_new_thread(robot_ai.video_stream_task, ())\n'

//     let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };

//开始手势识别
Blockly.Python['robotimg_cstarthand']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code=''

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['_thread.start_new_thread(robot_ai.command_task, ())'] = "_thread.start_new_thread(robot_ai.command_task, ())";
        return code;
    }else{
        return ''
    }
};

//手势识别结果
Blockly.Python['robotimg_handresult']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='robot_ai.gesture'


    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
	
};

//开启人脸检测
Blockly.Python['robotimg_cstartface']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code=''

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['_thread.start_new_thread(robot_ai.command_task, ())'] = "_thread.start_new_thread(robot_ai.command_task, ())";
        return code;
    }else{
        return ''
    }
};

//人脸检测结果
Blockly.Python['robotimg_faceresult']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='robot_ai.face_num'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
	
};

//开始图像分类识别
Blockly.Python['robotimg_cimgclassifer']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code=''

	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['_thread.start_new_thread(robot_ai.command_task, ())'] = "_thread.start_new_thread(robot_ai.command_task, ())";
        return code;
    }else{
        return ''
    }
};

//图像分类结果
Blockly.Python['robotimg_imgclassiferresult']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code='robot_ai.object'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
	
};

//开启图传运动控制
Blockly.Python['robotimg_cstartmove']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let code=''

	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['_thread.start_new_thread(robot_ai.command_task, ())'] = "_thread.start_new_thread(robot_ai.command_task, ())";
        return code;
    }else{
        return ''
    }
};

//键盘按键
Blockly.Python['robotimg_moveresult']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
   return ''
};

//键盘按键被按下
Blockly.Python['robotimg_keyisdown']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
   return ''
};

//键盘按键被松开
Blockly.Python['robotimg_keyisup']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
   return ''
};

// //运动
// Blockly.Python['robotmove_move']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let dir= block.getFieldValue('TWO') || 'False';
//     let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
//     speed=speed.replace(/^["']|["']$/g, '');
//     let code
//     if(dir==1){
//         code=`robot.send_move(${speed},${speed})\n`
//     }else if(dir==2){
//         code=`robot.send_move(-${speed},-${speed})\n`
//     }else if(dir==3){
//         code=`robot.send_move(-${speed},${speed})\n`
//     }else if(dir==4){
//         code=`robot.send_move(${speed},-${speed})\n`
//     }else if(dir==0){
//         code=`robot.send_move(0,0)\n`
//     }

    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };




// Blockly.Python['robotmove_moveSpeed']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let speedL= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
//     let speedR= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
//     speedL=speedL.replace(/^["']|["']$/g, '');
//     speedR=speedR.replace(/^["']|["']$/g, '');
//     let code
//     code=`robot.send_move(${speedL},${speedR})\n`

// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };

// Blockly.Python['robotimg_moveresult']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
   
//     let code=`robot_ai.move`
    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return [code,Blockly.Python.ORDER_NONE];
//     }else{
//         return ''
//     }
// };


// Blockly.Python['robotmove_movetime']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
//     let dir=block.getFieldValue('TWO') || 'False';
//     let time= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');
//     speed=speed.replace(/^["']|["']$/g, '');
//     time=time.replace(/^["']|["']$/g, '');
//     let code
//     if(dir==1){
//         code=`robot.send_move_time(${speed},${speed},${time}*10)\n`
//     }else if(dir==2){
//         code=`robot.send_move_time(-${speed},-${speed},${time}*10)\n`
//     }else if(dir==3){
//         code=`robot.send_move_time(-${speed},${speed},${time}*10)\n`
//     }else if(dir==4){
//         code=`robot.send_move_time(${speed},-${speed},${time}*10)\n`
//     }else if(dir==0){
//         code=`robot.send_move_time(0,0,0)\n`
//     }
    

    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };

// Blockly.Python['robotmove_movedistance']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
//     let dir=block.getFieldValue('TWO') || 'False';
//     let distance= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');
//     speed=speed.replace(/^["']|["']$/g, '');
//     distance=distance.replace(/^["']|["']$/g, '');
//     let code
//     if(dir==1){
//         code=`robot.send_move_distance(${speed},${speed},${distance})\n`
//     }else if(dir==2){
//         code=`robot.send_move_distance(-${speed},-${speed},${distance})\n`
//     }else if(dir==3){
//         code=`robot.send_move_distance(-${speed},${speed},${distance})\n`
//     }else if(dir==4){
//         code=`robot.send_move_distance(${speed},-${speed},${distance})\n`
//     }else if(dir==0){
//         code=`robot.send_move_distance(0,0,0)\n`
//     }

    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };

// //机械手
// Blockly.Python['robotmove_catchHand']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let port= block.getFieldValue('ONE') || 'False';
//     let hand= block.getFieldValue('TWO') || 'False';

//     let code = `robot.send_paw(${port},${hand})\n`
    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };


// //炮台
// Blockly.Python['robotmove_fort']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let port= block.getFieldValue('ONE') || 'False';
//     let num= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
//     num=num.replace(/^["']|["']$/g, '');
//     let code=`robot.send_fire(${port},1,${num})\n`
    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };

/**---------运动新协议---------------- */


//一直运动
Blockly.Python['robotmove_move']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let dir= block.getFieldValue('ONE') || 'False';
    let speed= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    speed=speed.replace(/^["']|["']$/g, '');
    let code
    if(dir==2){
        code=`icrobot.motor.move_forward(${speed},duration=-1,distance=-1)\n`
    }else if(dir==3){
        code=`icrobot.motor.move_backward(${speed},duration=-1,distance=-1)\n`
    }else if(dir==4){
        code=`icrobot.motor.turn_left(${speed},duration=-1,distance=-1)\n`
    }else if(dir==5){
        code=`icrobot.motor.turn_right(${speed},duration=-1,distance=-1)\n`
    }else if(dir==1){
        code=`icrobot.motor.move_stop()\n`
    }

    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//停止运动
Blockly.Python['robotmove_moveStop']=function(block){


    let code = `icrobot.motor.move_stop()\n`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//运动时间
Blockly.Python['robotmove_moveDirTime']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";

    let dir= block.getFieldValue('ONE') || 'False';
    let speed= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let time= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');
    speed=speed.replace(/^["']|["']$/g, '');
    time=time.replace(/^["']|["']$/g, '');

    time=Math.abs(Number(time))
    let code

    if(dir==2){
        code=`icrobot.motor.move_forward(${speed},duration=${time},distance=-1)\n`
    }else if(dir==3){
        code=`icrobot.motor.move_backward(${speed},duration=${time},distance=-1)\n`
    }else if(dir==4){
        code=`icrobot.motor.turn_left(${speed},duration=${time},distance=-1)\n`
    }else if(dir==5){
        code=`icrobot.motor.turn_right(${speed},duration=${time},distance=-1)\n`
    }else if(dir==1){
        code=`icrobot.motor.move_stop()\n`
    }

    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//前进距离
Blockly.Python['robotmove_moveForwardDistance']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    let distance= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let dir= block.getFieldValue('THREE') || 'False';
    speed=speed.replace(/^["']|["']$/g, '');
    distance=distance.replace(/^["']|["']$/g, '');

    let code
    if(dir=='2'){
        code=`icrobot.motor.move_forward(${speed},duration=-1,distance=${distance})\n`
    }else{
        code=`icrobot.motor.move_backward(${speed},duration=-1,distance=${distance})\n`
    }
    

    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};


//后退距离
// Blockly.Python['robotmove_moveBackwardDistance']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
//     let distance= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
//     speed=speed.replace(/^["']|["']$/g, '');
//     distance=distance.replace(/^["']|["']$/g, '');

//     speed=Math.abs(Number(speed))
//     distance=Math.abs(Number(distance))
//     let code
//     code=`icrobot.motor.move_backward(${speed},duration=-1,distance=${distance})\n`

    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };


//左转度数
Blockly.Python['robotmove_moveLeftDegree']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    let degree= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let dir= block.getFieldValue('THREE') || 'False';
    speed=speed.replace(/^["']|["']$/g, '');
    degree=degree.replace(/^["']|["']$/g, '');

    let code
    if(dir=='4'){
        code=`icrobot.motor.turn_left(${speed},duration=-1,distance=${degree})\n`
    }else{
        code=`icrobot.motor.turn_right(${speed},duration=-1,distance=${degree})\n`
    }
    

    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};



//左转度数
// Blockly.Python['robotmove_moveRightDegree']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
//     let degree= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
//     speed=speed.replace(/^["']|["']$/g, '');
//     degree=degree.replace(/^["']|["']$/g, '');

//     speed=Math.abs(Number(speed))
//     degree=Math.abs(Number(degree))
//     let code
//     code=`icrobot.motor.turn_right(${speed},duration=-1,distance=${degree})\n`

    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return code;
//     }else{
//         return ''
//     }
// };

//左轮右轮
Blockly.Python['robotmove_moveSpeed']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let speedL= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    let speedR= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    speedL=speedL.replace(/^["']|["']$/g, '');
    speedR=speedR.replace(/^["']|["']$/g, '');

    let code
    code=`icrobot.motor.drive(${speedL},${speedR})\n`

	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//单独左轮
Blockly.Python['robotmove_moveLeftSpeed']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    let num= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let mode= block.getFieldValue('THREE') || 'False';
    let wheel= block.getFieldValue('FOUR') || 'False';
    speed=speed.replace(/^["']|["']$/g, '');
    num=num.replace(/^["']|["']$/g, '');

    // num=Math.abs(Number(num))
    let code
    if(wheel=='0'){
        if(mode=='mm'){
            code=`icrobot.motor.leftmotor_drive(${speed},duration=-1,distance=${num})\n`
        }else if(mode=='秒'){
            code=`icrobot.motor.leftmotor_drive(${speed},duration=${Math.abs(Number(num))},distance=-1)\n`
        }
    }else{
        if(mode=='mm'){
            code=`icrobot.motor.rightmotor_drive(${speed},duration=-1,distance=${num})\n`
        }else if(mode=='秒'){
            code=`icrobot.motor.rightmotor_drive(${speed},duration=${Math.abs(Number(num))},distance=-1)\n`
        }
    }
    
    

	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

// 单独左轮一直
Blockly.Python['robotmove_moveLeftForeverSpeed']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    speed=speed.replace(/^["']|["']$/g, '');
    let wheel= block.getFieldValue('TWO') || 'False';

    let code
    if(wheel=='0'){
        code=`icrobot.motor.leftmotor_drive(${speed},duration=-1,distance=-1)\n`
    }else{
        code=`icrobot.motor.rightmotor_drive(${speed},duration=-1,distance=-1)\n`
    }
    

	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//单独右轮
Blockly.Python['robotmove_moveRightSpeed']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    let num= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let mode= block.getFieldValue('THREE') || 'False';
    speed=speed.replace(/^["']|["']$/g, '');
    num=num.replace(/^["']|["']$/g, '');

    // num=Math.abs(Number(num))
    let code
    if(mode=='cm'){
        code=`icrobot.motor.rightmotor_drive(${speed},duration=-1,distance=${num})\n`
    }else if(mode=='秒'){
        code=`icrobot.motor.rightmotor_drive(${speed},duration=${Math.abs(Number(num))},distance=-1)\n`
    }
    

	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

// 单独右轮一直
Blockly.Python['robotmove_moveRightForeverSpeed']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    speed=speed.replace(/^["']|["']$/g, '');

    let code
    code=`icrobot.motor.rightmotor_drive(${speed},duration=-1,distance=-1)\n`

	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};
//机械手松开
Blockly.Python['robotactuator_gripperOpen']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let port= block.getFieldValue('ONE') || 'False';

    let code = `icrobot.gripper.open(${port})\n`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//机械手抓取
Blockly.Python['robotactuator_gripperClose']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let port= block.getFieldValue('ONE') || 'False';

    let code = `icrobot.gripper.close(${port})\n`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

Blockly.Python['robotactuator_gripperOpenUntil']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let port= block.getFieldValue('ONE') || 'False';

    let code = `icrobot.gripper.open_until_done(${port})\n`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

Blockly.Python['robotactuator_gripperCloseUntil']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let port= block.getFieldValue('ONE') || 'False';

    let code = `icrobot.gripper.close_until_done(${port})\n`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};

//机械手动作是否完成
// Blockly.Python['robotmove_gripperIsDown']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let port= block.getFieldValue('ONE') || 'False';

//     let code = `icrobot.gripper.is_action_done(${port})`
    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return [code,Blockly.Python.ORDER_NONE];
//     }else{
//         return ''
//     }
// };

//炮台发射
Blockly.Python['robotactuator_gunFire']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let port= block.getFieldValue('ONE') || 'False';
    let num= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');

    num=num.replace(/^["']|["']$/g, '');
    let code = `icrobot.gun.fire(${port},${num})\n`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};


Blockly.Python['robotactuator_gunFireUntil']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let port= block.getFieldValue('ONE') || 'False';
    let num= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');

    num=num.replace(/^["']|["']$/g, '');
    let code = `icrobot.gun.fire_until_done(${port},${num})\n`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};
//炮台是否发射完成
// Blockly.Python['robotmove_gunFireIsDown']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let port= block.getFieldValue('ONE') || 'False';

//     let code = `icrobot.gun.is_fire_done(${port})`
    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return [code,Blockly.Python.ORDER_NONE];
//     }else{
//         return ''
//     }
// };


/**
 传感器新协议
 */
function convertBinaryTo2DArray(binaryData) {
    // 确保输入的数据长度是192
    console.log(binaryData.length)
    if (binaryData.length !== 192) {
        throw new Error("输入的二进制数据长度必须为 192 位");
    }

    const result = [];
    // 将数据每24位分为一组
    for (let i = 0; i < 8; i++) {
        // 从第 i * 24 位开始，取出 24 位数据
        const group = binaryData.slice(i * 24, (i + 1) * 24);
        // 将每组数据转为数组并添加到结果数组中
        result.push(group.split('').map(Number));
    }

    return result;
}
function convertToHex(binary2DArray) {
    // 结果数组，用来存储每一列的十六进制值
    const hexArray = [];

    // 遍历每一列
    for (let col = 0; col < binary2DArray[0].length; col++) {
        // 获取这一列的所有行的二进制数据
        let binaryString = '';
        for (let row = binary2DArray.length-1; row >=0; row--) {
            binaryString += binary2DArray[row][col];  // 将该列的每一行元素拼接成二进制字符串
        }

        // 将二进制字符串转为十六进制
        const hexValue = parseInt(binaryString, 2).toString(16).toUpperCase();  // 转为十六进制并大写

        // 将结果加入到 hexArray 中
        let HEX='0x'+hexValue
        hexArray.push(HEX);
    }

    return hexArray;
}



//设置亮度
Blockly.Python['robotshow_brightness']=function(block){
    
    let light= block.getFieldValue('ONE') || 'False';


    let code=`icrobot.display.set_brightness(${light})\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//设置图像
Blockly.Python['robotshow_showImage']=function(block){
    
    let data=Blockly.Python.statementToCode(block,'ONE');
    let mode= block.getFieldValue('TWO') || 'False';
    data = data.replace(/^["'\s]+|["'\s]+$/g, '');  // 去掉引号和空格

    const result=convertBinaryTo2DArray(data)
    let hexArr=convertToHex(result)
    let code=`icrobot.display.show_image([${hexArr}],${mode})\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//显示图像显示时间
Blockly.Python['robotshow_showImageTime']=function(block){
    
    let data=Blockly.Python.statementToCode(block,'ONE');
    let time=Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let mode= block.getFieldValue('THREE') || 'False';

    data = data.replace(/^["'\s]+|["'\s]+$/g, '');  // 去掉引号和空格

    time=time.replace(/^["']|["']$/g, '');

    const result=convertBinaryTo2DArray(data)
    let hexArr=convertToHex(result)
    let code=`icrobot.display.show_image([${hexArr}],${mode})\ntime.sleep(${time})\nicrobot.display.clear()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//显示文本
Blockly.Python['robotshow_showText']=function(block){
    
    let x= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let y= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');

    let text= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');

    x=x.replace(/^["']|["']$/g, '');
    y=y.replace(/^["']|["']$/g, '');
    text=text.replace(/^["']|["']$/g, '');


    let code=`icrobot.display.show_text(${text},pos_x=${x},pos_y=${y})\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//显示文本不设置位置
Blockly.Python['robotshow_showTextNoPlace']=function(block){
    let text= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    let mode= block.getFieldValue('TWO') || 'False';
    // text=text.replace(/^["']|["']$/g, '');

    

    if(!text.startsWith('icrobot')){
        text=text.slice(0,30)
    }
    let code=`icrobot.display.show_text(str(${text}),${mode})\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}


//显示表情编号
Blockly.Python['robotemote_showEmote']=function(block){
    let emote= block.getFieldValue('ONE') || 'False';
    // let mode= block.getFieldValue('TWO') || 'False';


    let code=`icrobot.display.show_expression(${emote})\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}


//显示像素点
Blockly.Python['robotshow_setPixelSave']=function(block){
    
    // let state= block.getFieldValue('ONE') || 'False';
    let x= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let y= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');

    
    x=x.replace(/^["']|["']$/g, '');
    y=y.replace(/^["']|["']$/g, '');
    let code

    code=`icrobot.display.add_pixel(${x},${y})\n`
    // if(state=='0'){
    //     code=`icrobot.display.set_pixel(${x},${y},True)\n`
    // }else if(state=='1'){
    //     code=`icrobot.display.set_pixel(${x},${y},False)\n`
    // }



    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

Blockly.Python['robotshow_setPixel']=function(block){
    
    // let state= block.getFieldValue('ONE') || 'False';
    let x= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let y= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');

    
    x=x.replace(/^["']|["']$/g, '');
    y=y.replace(/^["']|["']$/g, '');
    let code

    code=`icrobot.display.set_pixel(${x},${y})\n`
    // if(state=='0'){
    //     code=`icrobot.display.set_pixel(${x},${y},True)\n`
    // }else if(state=='1'){
    //     code=`icrobot.display.set_pixel(${x},${y},False)\n`
    // }



    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

Blockly.Python['robotshow_clearPixel']=function(block){
    
    // let state= block.getFieldValue('ONE') || 'False';
    let x= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let y= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');

    
    x=x.replace(/^["']|["']$/g, '');
    y=y.replace(/^["']|["']$/g, '');
    let code

    code=`icrobot.display.clear_pixel(${x},${y})\n`
    // if(state=='0'){
    //     code=`icrobot.display.set_pixel(${x},${y},True)\n`
    // }else if(state=='1'){
    //     code=`icrobot.display.set_pixel(${x},${y},False)\n`
    // }



    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}


Blockly.Python['robotshow_changePixel']=function(block){
    
    // let state= block.getFieldValue('ONE') || 'False';
    let x= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let y= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');

    
    x=x.replace(/^["']|["']$/g, '');
    y=y.replace(/^["']|["']$/g, '');
    let code

    code=`icrobot.display.toggle_pixel(${x},${y})\n`
    // if(state=='0'){
    //     code=`icrobot.display.set_pixel(${x},${y},True)\n`
    // }else if(state=='1'){
    //     code=`icrobot.display.set_pixel(${x},${y},False)\n`
    // }



    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}
//熄屏
Blockly.Python['robotshow_clear']=function(block){
    
    let code
    code=`icrobot.display.clear()\n`



    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//设置音量大小
Blockly.Python['robotsound_setVol']=function(block){
    
    let vol= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    
    vol=vol.replace(/^["']|["']$/g, '');

    let code=`icrobot.speaker.set_volume(${vol})\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//阻塞播放
Blockly.Python['robotsound_musicUntil']=function(block){
    
    let music= block.getFieldValue('ONE') || 'False';

    let code
    code=`icrobot.speaker.play_music_until_done('/flash/${music}')\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//非阻塞播放
Blockly.Python['robotsound_music']=function(block){
    
    let music= block.getFieldValue('ONE') || 'False';

    let code
    code=`icrobot.speaker.play_music('/flash/${music}')\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//停止播放
Blockly.Python['robotsound_musicStop']=function(block){
    

    let code
    code=`icrobot.speaker.stop_sounds()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//播放本地声音
Blockly.Python['robotsound_playLocalMusic']=function(block){
    

    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//发送声音
Blockly.Python['robotsound_sendMusic']=function(block){
    

    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//结束发送声音
Blockly.Python['robotsound_stopSendMusic']=function(block){
    

    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//文字转语音并发送
Blockly.Python['robotsound_tts']=function(block){
    

    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//增加音量
Blockly.Python['robotsound_addSound']=function(block){
    // let sound=Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');

    // sound=sound.replace(/^["']|["']$/g, '');
    let code=''
    code=code+'icrobot.speaker.set_volume_add()\n'
    

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//减少音量
Blockly.Python['robotsound_subSound']=function(block){
    // let sound=Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');

    // sound=sound.replace(/^["']|["']$/g, '');
    let code=''
    code=code+'icrobot.speaker.set_volume_sub()\n'

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}


//按键
Blockly.Python['robotsensors_key']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let key=block.getFieldValue('ONE') || 'False';
    

    let code;
    if(key=='8'){
        code=`icrobot.leftkey.value()==0`
    }else if(key=='7'){
        code=`icrobot.rightkey.value()==0`
    }
    
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
};

//隐私开关
Blockly.Python['robotsensors_private']=function(block){


    

    let code=`icrobot.privacy_switch.value()`
    
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
};


Blockly.Python['robotsensors_soundComp']=function(block){
    

    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];;
    }else{
        return ''
    }
}


Blockly.Python['robotsensors_elector']=function(block){
    

    let code
    code=`icrobot.power.value() `

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];;
    }else{
        return ''
    }
}

Blockly.Python['robotsensors_speed']=function(block){
    

    let dir= block.getFieldValue('ONE') || 'False';
    let code
    if(dir=='0'){
        code=`icrobot.motor.left_speed()`
    }else{
        code=`icrobot.motor.right_speed()`
    }
    

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];;
    }else{
        return ''
    }
}

// Blockly.Python['robotsensors_private']=function(block){
    

//     let code
//     code=``

//     let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         return [code,Blockly.Python.ORDER_NONE];;
//     }else{
//         return ''
//     }
// }

Blockly.Python['robotsensors_distance']=function(block){
    

    let dir= block.getFieldValue('ONE') || 'False';
    let code
    if(dir=='0'){
        code=`icrobot.motor.left_moving_distance()`
    }else{
        code=`icrobot.motor.right_moving_distance()`
    }
    

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];;
    }else{
        return ''
    }
}




//开始灰度学习
Blockly.Python['robotsensors_grayLearning']=function(block){
    

    let code
    code=`icrobot.rgb_sensor.start_grayscale_learning()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//灰度学习颜色

Blockly.Python['robotsensors_graystudycolor']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let color= block.getFieldValue('ONE') || 'False';
    let code=`icrobot.rgb_sensor.start_color_learning(${color})\n`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};


//巡线传感器模式
let MODE=2

Blockly.Python['robotsensors_linemode']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let mode= block.getFieldValue('ONE') || 'False';
    let code=`icrobot.rgb_sensor.set_line_mode(${mode})\n`
    MODE=mode
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return code;
    }else{
        return ''
    }
};


// Blockly.Python['robotsensors_lineportallresult']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let code=`icrobot.rgb_sensor.get_line_value(5)\n`
    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return [code,Blockly.Python.ORDER_NONE];
//     }else{
//         return ''
//     }
// };
//探头检测到的值
Blockly.Python['robotsensors_lineportresult']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let port= block.getFieldValue('ONE') || 'False';
    let code=`icrobot.rgb_sensor.read_line_value(${port})`
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
};

//比较探头检测到的值
Blockly.Python['robotsensors_islineport']=function(block){

    // Blockly.Python.definitions_['icrobot'] = "import icrobot";
    let port= block.getFieldValue('ONE') || 'False';
    let comp= block.getFieldValue('TWO') || 'False';
    let num= Blockly.Python.valueToCode(block, 'THREE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'THREE');

    num=num.replace(/^["']|["']$/g, '');
    let code
    if(comp=='>'){
        code=`icrobot.rgb_sensor.read_line_value(${port})>${num}`
    }else if(comp=='<'){
        code=`icrobot.rgb_sensor.read_line_value(${port})<${num}`
    }else if(comp=='='){
        code=`icrobot.rgb_sensor.read_line_value(${port})==${num}`
    }
    
	let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        // Blockly.Python.definitions_['icrobot'] = "import icrobot";
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
};

//关闭补光灯
Blockly.Python['robotsensors_closeLight']=function(block){
    

    let code
    code=`icrobot.rgb_sensor.close()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}


//开始自动巡线直到
Blockly.Python['robotsensors_startLineUntil']=function(block){
    

    let speed= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    let lineData=block.getFieldValue('ONE') || 'False';

    speed=speed.replace(/^["']|["']$/g, '');

    const arr = lineData.split('').map(Number);
    let code
    code=`icrobot.rgb_sensor.line_tracking_until(${speed},[${arr}])\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//开始自动巡线
Blockly.Python['robotsensors_startLine']=function(block){
    

    let speed= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE')

    speed=speed.replace(/^["']|["']$/g, '');
    let code
    code=`icrobot.rgb_sensor.line_tracking(${speed})\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//停止自动巡线
Blockly.Python['robotsensors_stopLine']=function(block){
    

    let code
    code=`icrobot.rgb_sensor.stop_line_tracking()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}


//声音大小
Blockly.Python['robotsensors_soundComp']=function(block){
    

    let comp=block.getFieldValue('ONE') || 'False';

    let num=Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    num=num.replace(/^["']|["']$/g, '');
    let code
    if(comp=='>'){
        code=`icrobot.asr.vol()>${num}`
    }else if(comp=='='){
        code=`icrobot.asr.vol()==${num}`
    }else if(comp=='<'){
        code=`icrobot.asr.vol()<${num}`
    }

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotsensors_sound']=function(block){
    let code=`icrobot.asr.vol()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

//开始离线语音识别
Blockly.Python['robotsensors_asrStart']=function(block){
    

    let code
    code=`icrobot.asr.start()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//停止离线语音识别
Blockly.Python['robotsensors_asrStop']=function(block){
    

    let code
    code=`icrobot.asr.stop()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

//离线语音识别结果
Blockly.Python['robotsensors_asrResult']=function(block){
    let result=block.getFieldValue('ONE') || 'False';

    const arr = result.split(',').map(Number);  
    let code=`icrobot.asr.result()==${arr[0]}`
    for(let i=1;i<arr.length;i++){
        code+=` or icrobot.asr.result()==${arr[i]}`
    }


    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];;
    }else{
        return ''
    }
}

// //开始自动巡线
// Blockly.Python['robotsensors_startLine']=function(block){
    

//     let code
//     code=``

//     let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         return code;
//     }else{
//         return ''
//     }
// }



//wifi
Blockly.Python['robotwifi_staConnect']=function(block){


    let ssid= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');
    let pass= Blockly.Python.valueToCode(block, 'TWO',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'TWO');
    ssid=ssid.replace(/^["']|["']$/g, '');
    pass=pass.replace(/^["']|["']$/g, '');

    let code=`icrobot.wifi.connect_sta('${ssid}', '${pass}')\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
};

Blockly.Python['robotwifi_localIp']=function(block){

  return ''
};

Blockly.Python['robotwifi_isConnect']=function(block){

    let code=`icrobot.wifi.is_connected()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
};

Blockly.Python['robotwifi_info']=function(block){

    let code=`icrobot.wifi.information()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
};

Blockly.Python['robotwifi_stop']=function(block){

    let code=`icrobot.wifi.disconnect_sta()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
};
Blockly.Python['robotwifi_startAp']=function(block){

    let code=`icrobot.wifi.smart_config()\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
};

Blockly.Python['robotwifi_startWifi']=function(block){

    return ''
};
Blockly.Python['robotwifi_stopwifi']=function(block){

    return ''
};
Blockly.Python['robotwifi_broadcast']=function(block){

    return ''
};
Blockly.Python['robotwifi_broadcastAndPost']=function(block){

    return ''
};

Blockly.Python['robotwifi_boardcastData']=function(block){

    return ''
};

Blockly.Python['robotwifi_reciveBroadcast']=function(block){

    return ''
};

Blockly.Python['robotwifi_setChannel']=function(block){

    return ''
};


//ai功能
Blockly.Python['robotimg_cstartMode']=function(block){
    

    let mode=block.getFieldValue('ONE') || 'False';
    let code
    if(mode=='1'){
        // code=`icrobot.ai.set_model(ai.color_recognition)\n`
        code=``
    }else if(mode=='2'){
        code=`icrobot.ai.set_model(icrobot.ai.color_tracking)\n`
    }else if(mode=='3'){
        code=`icrobot.ai.set_model(icrobot.ai.qr_recognition)\n`
    }else if(mode=='4'){
        code=`icrobot.ai.set_model(icrobot.ai.face_detection)\n`
    }else if(mode=='5'){
        code=``
        // code=`icrobot.ai.set_model(ai.face_recognition)\n`
    }else if(mode=='6'){
        code=``
        // code=`icrobot.ai.set_model(ai.object_recognition)\n`
    }else if(mode=='7'){
        code=``
        // code=`icrobot.ai.set_model( ai.roadsign_recognition)\n`
    }
    

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}


Blockly.Python['robotimg_cstopMode']=function(block){

   let code=`icrobot.ai.close_model()\n`
    

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

Blockly.Python['robotimg_getQrContent']=function(block){
    

    let code
    code=`icrobot.ai.get_qr_information()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_isQr']=function(block){
    

    let code
    code=`icrobot.ai.qr_isrecognized()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_getQrPlace']=function(block){
    

    let mode=block.getFieldValue('ONE') || 'False';
    let code
    code=`icrobot.ai.get_qr_location('${mode}')`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

function hexToRgb(hex) {
    // 检查颜色值是否以井号开头
    if (hex.startsWith('#')) {
        // 移除井号
        hex = hex.slice(1);
    }

    // 如果是3位十六进制（例如 #FFF），则扩展为6位十六进制（#FFFFFF）
    if (hex.length === 3) {
        hex = hex.split('').map(function (char) {
        return char + char;
        }).join('');
    }

    // 提取红色、绿色和蓝色部分，并将它们转换为十进制
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    let result=[r,g,b]
    // 返回 RGB 格式的颜色字符串
    return result;
}
Blockly.Python['robotimg_readColor']=function(block){
    

    let mode=hexToRgb(block.getFieldValue('ONE') || 'False');
    let code
    code=`icrobot.ai.get_color(${mode})`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_setColor']=function(block){
    

    let color=block.getFieldValue('ONE') || 'False';
    let code
    code=`icrobot.ai.set_color_tracking('${color}')\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

Blockly.Python['robotimg_isReadColor']=function(block){
    
    let code
    code=`icrobot.ai.color_istracked()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_readColorPlace']=function(block){
    let place=block.getFieldValue('ONE') || 'False';
    let code
    code=`icrobot.ai.get_color_location('${place}')`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_isFace']=function(block){
    let code
    code=`icrobot.ai.face_isdetected()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_faceNum']=function(block){
    let code
    code=`icrobot.ai.get_face_number()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_facePlace']=function(block){
    let place=block.getFieldValue('ONE') || 'False';
    let code
    code=`icrobot.ai.get_face_location('${place}')`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_symFace']=function(block){
    let num= Blockly.Python.valueToCode(block, 'ONE',Blockly.Python.ORDER_NONE) || Blockly.Python.statementToCode(block,'ONE');

    num=num.replace(/^["']|["']$/g, '');
    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return code;
    }else{
        return ''
    }
}

Blockly.Python['robotimg_isSymFace']=function(block){
    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_faceName']=function(block){
    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_symFacePlace']=function(block){
    let place=block.getFieldValue('ONE') || 'False';
    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_isGood']=function(block){
    let name=block.getFieldValue('ONE') || 'False';
    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_goodPlace']=function(block){
    let place=block.getFieldValue('ONE') || 'False';
    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_isTraffic']=function(block){
    let traffic=block.getFieldValue('ONE') || 'False';
    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Python['robotimg_trafficPlace']=function(block){
    let place=block.getFieldValue('ONE') || 'False';
    let code
    code=``

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='robotevent_when'){
        return [code,Blockly.Python.ORDER_NONE];
    }else{
        return ''
    }
}
//键盘按键
// Blockly.Python['robotimg_keyisdown']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let key= block.getFieldValue('ONE') || 'False';
//     let code=`robot_ai.move=='${key}' and robot_ai.speed==1`
    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return [code,Blockly.Python.ORDER_NONE];
//     }else{
//         return ''
//     }
// };

// Blockly.Python['robotimg_keyisup']=function(block){

//     // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//     let key= block.getFieldValue('ONE') || 'False';
//     let code=`robot_ai.move=='${key}' and robot_ai.speed==0`
    
// 	let parent=block
//     while (parent.getParent()) {
//         parent = parent.getParent();
//     }
// 	if(parent.type=='robotevent_when'){
//         // Blockly.Python.definitions_['icrobot'] = "import icrobot";
//         return [code,Blockly.Python.ORDER_NONE];
//     }else{
//         return ''
//     }
// };

Blockly.Python['robotevent_when']=function(block){

	return '';
};