<?php

if  ($_POST) 
{
	$servername = "localhost";
	$username = "root";
	$password = "koltun123";
	$dbname = "questionnaire";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	$p1q1 = ($_POST['p1q1']);
	$p1q2 = json_decode($_POST['p1q2']);
	$p1q3 = json_decode($_POST['p1q3']);
	$p1q4 = json_decode($_POST['p1q4']);
	$p1q5 = ($_POST['p1q5']);
	$p1q6 = ($_POST['p1q6']);
	$p1q7 = json_decode($_POST['p1q7']);
	$p2q1	=	json_decode($_POST['p2q1']);
	$p2q2	=	json_decode($_POST['p2q2']);
	$p2q3	=	json_decode($_POST['p2q3']);
	$p2q4	=	json_decode($_POST['p2q4']);
	$p2q5	=	json_decode($_POST['p2q5']);
	$reactionTimeStringSimpleStroop = ($_POST['reactionTimeStringSimpleStroop']);
	$SimpleStroop = ($_POST['SimpleStroop']);
	$NBackAns = ($_POST['NBackAns']);
	$NBackReaction = ($_POST['NBackReaction']);
	$reactionTimeStringAdvancedStroop = ($_POST['reactionTimeStringAdvancedStroop']);
	$AdvancedStroop = ($_POST['AdvancedStroop']);
	$p6q1	=	($_POST['p6q1']);
$p6q2	=	($_POST['p6q2']);
$p6q3	=	($_POST['p6q3']);
$p6q4	=	($_POST['p6q4']);
$p6q5	=	($_POST['p6q5']);
$p6q6	=	($_POST['p6q6']);
$p6q7	=	($_POST['p6q7']);
$p6q8	=	($_POST['p6q8']);
$p6q9	=	($_POST['p6q9']);
$p6q10	=	($_POST['p6q10']);
$p6q11	=	($_POST['p6q11']);
$p6q12	=	($_POST['p6q12']);
$p6q13	=	($_POST['p6q13']);
$p6q14	=	($_POST['p6q14']);
$p6q15	=	($_POST['p6q15']);
$p6q16	=	($_POST['p6q16']);
$p6q17	=	($_POST['p6q17']);
$p6q18	=	($_POST['p6q18']);
$p6q19	=	($_POST['p6q19']);
$p6q20	=	($_POST['p6q20']);
$p6q21	=	($_POST['p6q21']);
$p6q22	=	($_POST['p6q22']);
$p6q23	=	($_POST['p6q23']);
$p6q24	=	($_POST['p6q24']);
$p6q25	=	($_POST['p6q25']);
$p6q26	=	($_POST['p6q26']);
$p6q27	=	($_POST['p6q27']);
$p6q28	=	($_POST['p6q28']);
$p6q29	=	($_POST['p6q29']);
$p6q30	=	($_POST['p6q30']);
$p6q31	=	($_POST['p6q31']);
$p6q32	=	($_POST['p6q32']);
$p6q33	=	($_POST['p6q33']);
$p6q34	=	($_POST['p6q34']);
$p6q35	=	($_POST['p6q35']);
$p6q36	=	($_POST['p6q36']);
$p6q37	=	($_POST['p6q37']);
$p6q38	=	($_POST['p6q38']);
$p6q39	=	($_POST['p6q39']);
$p6q40	=	($_POST['p6q40']);
$p6q41	=	($_POST['p6q41']);
$p6q42	=	($_POST['p6q42']);
$p6q43	=	($_POST['p6q43']);
$p6q44	=	($_POST['p6q44']);
$p6q45	=	($_POST['p6q45']);
$p6q46	=	($_POST['p6q46']);
$p6q47	=	($_POST['p6q47']);
$p6q48	=	($_POST['p6q48']);
$p6q49	=	($_POST['p6q49']);
$p6q50	=	($_POST['p6q50']);
$p6q51	=	($_POST['p6q51']);
$p6q52	=	($_POST['p6q52']);
$p6q53	=	($_POST['p6q53']);
$p6q54	=	($_POST['p6q54']);
$p6q55	=	($_POST['p6q55']);
$p6q56	=	($_POST['p6q56']);
$p6q57	=	($_POST['p6q57']);
$p6q58	=	($_POST['p6q58']);
$p6q59	=	($_POST['p6q59']);
$p6q60	=	($_POST['p6q60']);
$p6q61	=	($_POST['p6q61']);
$p6q62	=	($_POST['p6q62']);
$p6q63	=	($_POST['p6q63']);
$p6q64	=	($_POST['p6q64']);
$p6q65	=	($_POST['p6q65']);
$p6q66	=	($_POST['p6q66']);
$p6q67	=	($_POST['p6q67']);
$p6q68	=	($_POST['p6q68']);
$p6q69	=	($_POST['p6q69']);
$p6q70	=	($_POST['p6q70']);
$p6q71	=	($_POST['p6q71']);
$p6q72	=	($_POST['p6q72']);
$p6q73	=	($_POST['p6q73']);
$p6q74	=	($_POST['p6q74']);
$p6q75	=	($_POST['p6q75']);
$p6q76	=	($_POST['p6q76']);
$p6q77	=	($_POST['p6q77']);
$p6q78	=	($_POST['p6q78']);
$p6q79	=	($_POST['p6q79']);
$p6q80	=	($_POST['p6q80']);
$p6q81	=	($_POST['p6q81']);
$p6q82	=	($_POST['p6q82']);
$p6q83	=	($_POST['p6q83']);
$p6q84	=	($_POST['p6q84']);
$p6q85	=	($_POST['p6q85']);
$p6q86	=	($_POST['p6q86']);
$p6q87	=	($_POST['p6q87']);
$p6q88	=	($_POST['p6q88']);
$p6q89	=	($_POST['p6q89']);
$p6q90	=	($_POST['p6q90']);
$p6q91	=	($_POST['p6q91']);
$p6q92	=	($_POST['p6q92']);
$p6q93	=	($_POST['p6q93']);
$p6q94	=	($_POST['p6q94']);
$p6q95	=	($_POST['p6q95']);
$p6q96	=	($_POST['p6q96']);
$p6q97	=	($_POST['p6q97']);
$p6q98	=	($_POST['p6q98']);
$p6q99	=	($_POST['p6q99']);
$p6q100	=	($_POST['p6q100']);
$p6q101	=	($_POST['p6q101']);
$p6q102	=	($_POST['p6q102']);
$p6q103	=	($_POST['p6q103']);
$p6q104	=	($_POST['p6q104']);
$p6q105	=	($_POST['p6q105']);
$p6q106	=	($_POST['p6q106']);
$p6q107	=	($_POST['p6q107']);
$p6q108	=	($_POST['p6q108']);
$p6q109	=	($_POST['p6q109']);
$p6q110	=	($_POST['p6q110']);
$p6q111	=	($_POST['p6q111']);
$p6q112	=	($_POST['p6q112']);
$p6q113	=	($_POST['p6q113']);
$p6q114	=	($_POST['p6q114']);
$p6q115	=	($_POST['p6q115']);
$p6q116	=	($_POST['p6q116']);
$p6q117	=	($_POST['p6q117']);
$p6q118	=	($_POST['p6q118']);
$p6q119	=	($_POST['p6q119']);
$p6q120	=	($_POST['p6q120']);
$p6q121	=	($_POST['p6q121']);
$p6q122	=	($_POST['p6q122']);
$p6q123	=	($_POST['p6q123']);
$p6q124	=	($_POST['p6q124']);
$p6q125	=	($_POST['p6q125']);
$p6q126	=	($_POST['p6q126']);
$p6q127	=	($_POST['p6q127']);
$p6q128	=	($_POST['p6q128']);
$p6q129	=	($_POST['p6q129']);
$p6q130	=	($_POST['p6q130']);
$p6q131	=	($_POST['p6q131']);
$excercise1 = 	($_POST['excercise1']);
$excercise2 = 	($_POST['excercise2']);
$excercise3 = 	($_POST['excercise3']);
$excercise4 = 	($_POST['excercise4']);

	$sql = "INSERT INTO answers (p1q1, p1q2, p1q3, p1q4, p1q5, p1q6, p1q7, p2q1, p2q2, p2q3, p2q4, p2q5, reactionTimeSimpleStroop,
				simpleStroopAnswers, nBackAnswers, nBackReaction, reactionTimeAdvancedStroop, advancedStroopAnswers,
				p6q1,	p6q2,	p6q3,	p6q4,	p6q5,	p6q6,	p6q7,	p6q8,	p6q9,	p6q10,
p6q11,	p6q12,	p6q13,	p6q14,	p6q15,	p6q16,	p6q17,	p6q18,	p6q19,	p6q20,
p6q21,	p6q22,	p6q23,	p6q24,	p6q25,	p6q26,	p6q27,	p6q28,	p6q29,	p6q30,
p6q31,	p6q32,	p6q33,	p6q34,	p6q35,	p6q36,	p6q37,	p6q38,	p6q39,	p6q40,
p6q41,	p6q42,	p6q43,	p6q44,	p6q45,	p6q46,	p6q47,	p6q48,	p6q49,	p6q50,
p6q51,	p6q52,	p6q53,	p6q54,	p6q55,	p6q56,	p6q57,	p6q58,	p6q59,	p6q60,
p6q61,	p6q62,	p6q63,	p6q64,	p6q65,	p6q66,	p6q67,	p6q68,	p6q69,	p6q70,
p6q71,	p6q72,	p6q73,	p6q74,	p6q75,	p6q76,	p6q77,	p6q78,	p6q79,	p6q80,
p6q81,	p6q82,	p6q83,	p6q84,	p6q85,	p6q86,	p6q87,	p6q88,	p6q89,	p6q90,
p6q91,	p6q92,	p6q93,	p6q94,	p6q95,	p6q96,	p6q97,	p6q98,	p6q99,	p6q100,
p6q101,	p6q102,	p6q103,	p6q104,	p6q105,	p6q106,	p6q107,	p6q108,	p6q109,	p6q110,
p6q111,	p6q112,	p6q113,	p6q114,	p6q115,	p6q116,	p6q117,	p6q118,	p6q119,	p6q120,
p6q121,	p6q122,	p6q123,	p6q124,	p6q125,	p6q126,	p6q127,	p6q128,	p6q129,	p6q130,
p6q131, excercise1, excercise2, excercise3, excercise4									
)
				VALUES ('$p1q1', '$p1q2', '$p1q3', '$p1q4', '$p1q5', '$p1q6', '$p1q7',
				'$p2q1', '$p2q2', '$p2q3', '$p2q4', '$p2q5',
				'$reactionTimeStringSimpleStroop', 	'$SimpleStroop',
				'$NBackAns', '$NBackReaction',
				'$reactionTimeStringAdvancedStroop', '$AdvancedStroop',
'$p6q1',
'$p6q2',
'$p6q3',
'$p6q4',
'$p6q5',
'$p6q6',
'$p6q7',
'$p6q8',
'$p6q9',
'$p6q10',
'$p6q11',
'$p6q12',
'$p6q13',
'$p6q14',
'$p6q15',
'$p6q16',
'$p6q17',
'$p6q18',
'$p6q19',
'$p6q20',
'$p6q21',
'$p6q22',
'$p6q23',
'$p6q24',
'$p6q25',
'$p6q26',
'$p6q27',
'$p6q28',
'$p6q29',
'$p6q30',
'$p6q31',
'$p6q32',
'$p6q33',
'$p6q34',
'$p6q35',
'$p6q36',
'$p6q37',
'$p6q38',
'$p6q39',
'$p6q40',
'$p6q41',
'$p6q42',
'$p6q43',
'$p6q44',
'$p6q45',
'$p6q46',
'$p6q47',
'$p6q48',
'$p6q49',
'$p6q50',
'$p6q51',
'$p6q52',
'$p6q53',
'$p6q54',
'$p6q55',
'$p6q56',
'$p6q57',
'$p6q58',
'$p6q59',
'$p6q60',
'$p6q61',
'$p6q62',
'$p6q63',
'$p6q64',
'$p6q65',
'$p6q66',
'$p6q67',
'$p6q68',
'$p6q69',
'$p6q70',
'$p6q71',
'$p6q72',
'$p6q73',
'$p6q74',
'$p6q75',
'$p6q76',
'$p6q77',
'$p6q78',
'$p6q79',
'$p6q80',
'$p6q81',
'$p6q82',
'$p6q83',
'$p6q84',
'$p6q85',
'$p6q86',
'$p6q87',
'$p6q88',
'$p6q89',
'$p6q90',
'$p6q91',
'$p6q92',
'$p6q93',
'$p6q94',
'$p6q95',
'$p6q96',
'$p6q97',
'$p6q98',
'$p6q99',
'$p6q100',
'$p6q101',
'$p6q102',
'$p6q103',
'$p6q104',
'$p6q105',
'$p6q106',
'$p6q107',
'$p6q108',
'$p6q109',
'$p6q110',
'$p6q111',
'$p6q112',
'$p6q113',
'$p6q114',
'$p6q115',
'$p6q116',
'$p6q117',
'$p6q118',
'$p6q119',
'$p6q120',
'$p6q121',
'$p6q122',
'$p6q123',
'$p6q124',
'$p6q125',
'$p6q126',
'$p6q127',
'$p6q128',
'$p6q129',
'$p6q130',
'$p6q131',
'$excercise1',
'$excercise2',
'$excercise3',
'$excercise4'				
				)";


	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	   echo "Error: " . $sql . "<br>" . $conn->error;
	}
	echo "<h2>Thank you for your Comment!</h2>";

	$conn->close();
}

?> 
