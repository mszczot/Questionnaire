$(document).ready(function() {
  $("#btnSubmit").click(function()  {
	var p1q1 = $("input[type='radio'][name='p1q1']:checked").val();
	var p1q2 = $("input[type='radio'][name='p1q2']:checked").val();
	var p1q3 = $("input[type='radio'][name='p1q3']:checked").val();
	var p1q4 = $("input[type='radio'][name='p1q4']:checked").val();
	var p1q5 = $("#country2 option:selected").text();
	var p1q6 = $("#industryDropdown option:selected").text();
	var p1q7 = $("input[type='radio'][name='p1q7']:checked").val();
	var p2q1 = $("input[type='radio'][name='p2q1']:checked").val();
	var p2q2 = $("input[type='radio'][name='p2q2']:checked").val();
	var p2q3 = $("input[type='radio'][name='p2q3']:checked").val();
	var p2q4 = $("input[type='radio'][name='p2q4']:checked").val();
	var p2q5 = $("input[type='radio'][name='p2q5']:checked").val();
	var p2q6 = $("input[type='radio'][name='p2q6']:checked").val();
	var reactionTimeStringSimpleStroop = reactionTimeString;
	var SimpleStroop = simpleStroopTestAnswersString;
	var reactionTimeStringSimpleStroopa = reactionTimeaString;
	var SimpleStroopa = simpleStroopTestAnswersStringa;
	var NBackAns = nBackAnswers;
	var NBackReaction = nBackReactionTime;
	var reactionTimeStringAdvancedStroop = reactionTimeAdvancedString;
	var AdvancedStroop = advancedStroopTestAnswersString;
	var	p6q1	 = $("input[type='radio'][name='p6q1']:checked").val();
var	p6q2	 = $("input[type='radio'][name='p6q2']:checked").val();
var	p6q3	 = $("input[type='radio'][name='p6q3']:checked").val();
var	p6q4	 = $("input[type='radio'][name='p6q4']:checked").val();
var	p6q5	 = $("input[type='radio'][name='p6q5']:checked").val();
var	p6q6	 = $("input[type='radio'][name='p6q6']:checked").val();
var	p6q7	 = $("input[type='radio'][name='p6q7']:checked").val();
var	p6q8	 = $("input[type='radio'][name='p6q8']:checked").val();
var	p6q9	 = $("input[type='radio'][name='p6q9']:checked").val();
var	p6q10	 = $("input[type='radio'][name='p6q10']:checked").val();
var	p6q11	 = $("input[type='radio'][name='p6q11']:checked").val();
var	p6q12	 = $("input[type='radio'][name='p6q12']:checked").val();
var	p6q13	 = $("input[type='radio'][name='p6q13']:checked").val();
var	p6q14	 = $("input[type='radio'][name='p6q14']:checked").val();
var	p6q15	 = $("input[type='radio'][name='p6q15']:checked").val();
var	p6q16	 = $("input[type='radio'][name='p6q16']:checked").val();
var	p6q17	 = $("input[type='radio'][name='p6q17']:checked").val();
var	p6q18	 = $("input[type='radio'][name='p6q18']:checked").val();
var	p6q19	 = $("input[type='radio'][name='p6q19']:checked").val();
var	p6q20	 = $("input[type='radio'][name='p6q20']:checked").val();
var	p6q21	 = $("input[type='radio'][name='p6q21']:checked").val();
var	p6q22	 = $("input[type='radio'][name='p6q22']:checked").val();
var	p6q23	 = $("input[type='radio'][name='p6q23']:checked").val();
var	p6q24	 = $("input[type='radio'][name='p6q24']:checked").val();
var	p6q25	 = $("input[type='radio'][name='p6q25']:checked").val();
var	p6q26	 = $("input[type='radio'][name='p6q26']:checked").val();
var	p6q27	 = $("input[type='radio'][name='p6q27']:checked").val();
var	p6q28	 = $("input[type='radio'][name='p6q28']:checked").val();
var	p6q29	 = $("input[type='radio'][name='p6q29']:checked").val();
var	p6q30	 = $("input[type='radio'][name='p6q30']:checked").val();
var	p6q31	 = $("input[type='radio'][name='p6q31']:checked").val();
var	p6q32	 = $("input[type='radio'][name='p6q32']:checked").val();
var	p6q33	 = $("input[type='radio'][name='p6q33']:checked").val();
var	p6q34	 = $("input[type='radio'][name='p6q34']:checked").val();
var	p6q35	 = $("input[type='radio'][name='p6q35']:checked").val();
var	p6q36	 = $("input[type='radio'][name='p6q36']:checked").val();
var	p6q37	 = $("input[type='radio'][name='p6q37']:checked").val();
var	p6q38	 = $("input[type='radio'][name='p6q38']:checked").val();
var	p6q39	 = $("input[type='radio'][name='p6q39']:checked").val();
var	p6q40	 = $("input[type='radio'][name='p6q40']:checked").val();
var	p6q41	 = $("input[type='radio'][name='p6q41']:checked").val();
var	p6q42	 = $("input[type='radio'][name='p6q42']:checked").val();
var	p6q43	 = $("input[type='radio'][name='p6q43']:checked").val();
var	p6q44	 = $("input[type='radio'][name='p6q44']:checked").val();
var	p6q45	 = $("input[type='radio'][name='p6q45']:checked").val();
var	p6q46	 = $("input[type='radio'][name='p6q46']:checked").val();
var	p6q47	 = $("input[type='radio'][name='p6q47']:checked").val();
var	p6q48	 = $("input[type='radio'][name='p6q48']:checked").val();
var	p6q49	 = $("input[type='radio'][name='p6q49']:checked").val();
var	p6q50	 = $("input[type='radio'][name='p6q50']:checked").val();
var	p6q51	 = $("input[type='radio'][name='p6q51']:checked").val();
var	p6q52	 = $("input[type='radio'][name='p6q52']:checked").val();
var	p6q53	 = $("input[type='radio'][name='p6q53']:checked").val();
var	p6q54	 = $("input[type='radio'][name='p6q54']:checked").val();
var	p6q55	 = $("input[type='radio'][name='p6q55']:checked").val();
var	p6q56	 = $("input[type='radio'][name='p6q56']:checked").val();
var	p6q57	 = $("input[type='radio'][name='p6q57']:checked").val();
var	p6q58	 = $("input[type='radio'][name='p6q58']:checked").val();
var	p6q59	 = $("input[type='radio'][name='p6q59']:checked").val();
var	p6q60	 = $("input[type='radio'][name='p6q60']:checked").val();
var	p6q61	 = $("input[type='radio'][name='p6q61']:checked").val();
var	p6q62	 = $("input[type='radio'][name='p6q62']:checked").val();
var	p6q63	 = $("input[type='radio'][name='p6q63']:checked").val();
var	p6q64	 = $("input[type='radio'][name='p6q64']:checked").val();
var	p6q65	 = $("input[type='radio'][name='p6q65']:checked").val();
var	p6q66	 = $("input[type='radio'][name='p6q66']:checked").val();
var	p6q67	 = $("input[type='radio'][name='p6q67']:checked").val();
var	p6q68	 = $("input[type='radio'][name='p6q68']:checked").val();
var	p6q69	 = $("input[type='radio'][name='p6q69']:checked").val();
var	p6q70	 = $("input[type='radio'][name='p6q70']:checked").val();
var	p6q71	 = $("input[type='radio'][name='p6q71']:checked").val();
var	p6q72	 = $("input[type='radio'][name='p6q72']:checked").val();
var	p6q73	 = $("input[type='radio'][name='p6q73']:checked").val();
var	p6q74	 = $("input[type='radio'][name='p6q74']:checked").val();
var	p6q75	 = $("input[type='radio'][name='p6q75']:checked").val();
var	p6q76	 = $("input[type='radio'][name='p6q76']:checked").val();
var	p6q77	 = $("input[type='radio'][name='p6q77']:checked").val();
var	p6q78	 = $("input[type='radio'][name='p6q78']:checked").val();
var	p6q79	 = $("input[type='radio'][name='p6q79']:checked").val();
var	p6q80	 = $("input[type='radio'][name='p6q80']:checked").val();
var	p6q81	 = $("input[type='radio'][name='p6q81']:checked").val();
var	p6q82	 = $("input[type='radio'][name='p6q82']:checked").val();
var	p6q83	 = $("input[type='radio'][name='p6q83']:checked").val();
var	p6q84	 = $("input[type='radio'][name='p6q84']:checked").val();
var	p6q85	 = $("input[type='radio'][name='p6q85']:checked").val();
var	p6q86	 = $("input[type='radio'][name='p6q86']:checked").val();
var	p6q87	 = $("input[type='radio'][name='p6q87']:checked").val();
var	p6q88	 = $("input[type='radio'][name='p6q88']:checked").val();
var	p6q89	 = $("input[type='radio'][name='p6q89']:checked").val();
var	p6q90	 = $("input[type='radio'][name='p6q90']:checked").val();
var	p6q91	 = $("input[type='radio'][name='p6q91']:checked").val();
var	p6q92	 = $("input[type='radio'][name='p6q92']:checked").val();
var	p6q93	 = $("input[type='radio'][name='p6q93']:checked").val();
var	p6q94	 = $("input[type='radio'][name='p6q94']:checked").val();
var	p6q95	 = $("input[type='radio'][name='p6q95']:checked").val();
var	p6q96	 = $("input[type='radio'][name='p6q96']:checked").val();
var	p6q97	 = $("input[type='radio'][name='p6q97']:checked").val();
var	p6q98	 = $("input[type='radio'][name='p6q98']:checked").val();
var	p6q99	 = $("input[type='radio'][name='p6q99']:checked").val();
var	p6q100	 = $("input[type='radio'][name='p6q100']:checked").val();
var	p6q101	 = $("input[type='radio'][name='p6q101']:checked").val();
var	p6q102	 = $("input[type='radio'][name='p6q102']:checked").val();
var	p6q103	 = $("input[type='radio'][name='p6q103']:checked").val();
var	p6q104	 = $("input[type='radio'][name='p6q104']:checked").val();
var	p6q105	 = $("input[type='radio'][name='p6q105']:checked").val();
var	p6q106	 = $("input[type='radio'][name='p6q106']:checked").val();
var	p6q107	 = $("input[type='radio'][name='p6q107']:checked").val();
var	p6q108	 = $("input[type='radio'][name='p6q108']:checked").val();
var	p6q109	 = $("input[type='radio'][name='p6q109']:checked").val();
var	p6q110	 = $("input[type='radio'][name='p6q110']:checked").val();
var	p6q111	 = $("input[type='radio'][name='p6q111']:checked").val();
var	p6q112	 = $("input[type='radio'][name='p6q112']:checked").val();
var	p6q113	 = $("input[type='radio'][name='p6q113']:checked").val();
var	p6q114	 = $("input[type='radio'][name='p6q114']:checked").val();
var	p6q115	 = $("input[type='radio'][name='p6q115']:checked").val();
var	p6q116	 = $("input[type='radio'][name='p6q116']:checked").val();
var	p6q117	 = $("input[type='radio'][name='p6q117']:checked").val();
var	p6q118	 = $("input[type='radio'][name='p6q118']:checked").val();
var	p6q119	 = $("input[type='radio'][name='p6q119']:checked").val();
var	p6q120	 = $("input[type='radio'][name='p6q120']:checked").val();
var	p6q121	 = $("input[type='radio'][name='p6q121']:checked").val();
var	p6q122	 = $("input[type='radio'][name='p6q122']:checked").val();
var	p6q123	 = $("input[type='radio'][name='p6q123']:checked").val();
var	p6q124	 = $("input[type='radio'][name='p6q124']:checked").val();
var	p6q125	 = $("input[type='radio'][name='p6q125']:checked").val();
var	p6q126	 = $("input[type='radio'][name='p6q126']:checked").val();
var	p6q127	 = $("input[type='radio'][name='p6q127']:checked").val();
var	p6q128	 = $("input[type='radio'][name='p6q128']:checked").val();
var	p6q129	 = $("input[type='radio'][name='p6q129']:checked").val();
var	p6q130	 = $("input[type='radio'][name='p6q130']:checked").val();
var	p6q131	 = $("input[type='radio'][name='p6q131']:checked").val();
var	excercise1 = document.getElementById("excercise1").value;
var 	excercise2 = document.getElementById("excercise2").value;
var 	excercise3 = document.getElementById("excercise3").value;
var	excercise4 = $("input[type='radio'][name='excercise4']:checked").val();

    $.ajax({
      type: "POST",
      url: "php/send.php",
      data: {p1q1: p1q1, p1q2: p1q2, p1q3: p1q3, p1q4: p1q4, p1q5: p1q5, p1q6: p1q6, p1q7: p1q7, p2q1: p2q1, p2q2: p2q2,
      		p2q3: p2q3, p2q4: p2q4, p2q5: p2q5, p2q6: p2q6,
      		reactionTimeStringSimpleStroop: reactionTimeStringSimpleStroop,
      		SimpleStroop: SimpleStroop,
      		reactionTimeStringSimpleStroopa: reactionTimeStringSimpleStroopa,
      		SimpleStroopa: SimpleStroopa,
      		NBackAns: NBackAns,
      		NBackReaction: NBackReaction,
      		reactionTimeStringAdvancedStroop: reactionTimeStringAdvancedStroop,
      		AdvancedStroop: AdvancedStroop,
      		p6q1:	p6q1	,
p6q2:	p6q2	,
p6q3:	p6q3	,
p6q4:	p6q4	,
p6q5:	p6q5	,
p6q6:	p6q6	,
p6q7:	p6q7	,
p6q8:	p6q8	,
p6q9:	p6q9	,
p6q10:	p6q10	,
p6q11:	p6q11	,
p6q12:	p6q12	,
p6q13:	p6q13	,
p6q14:	p6q14	,
p6q15:	p6q15	,
p6q16:	p6q16	,
p6q17:	p6q17	,
p6q18:	p6q18	,
p6q19:	p6q19	,
p6q20:	p6q20	,
p6q21:	p6q21	,
p6q22:	p6q22	,
p6q23:	p6q23	,
p6q24:	p6q24	,
p6q25:	p6q25	,
p6q26:	p6q26	,
p6q27:	p6q27	,
p6q28:	p6q28	,
p6q29:	p6q29	,
p6q30:	p6q30	,
p6q31:	p6q31	,
p6q32:	p6q32	,
p6q33:	p6q33	,
p6q34:	p6q34	,
p6q35:	p6q35	,
p6q36:	p6q36	,
p6q37:	p6q37	,
p6q38:	p6q38	,
p6q39:	p6q39	,
p6q40:	p6q40	,
p6q41:	p6q41	,
p6q42:	p6q42	,
p6q43:	p6q43	,
p6q44:	p6q44	,
p6q45:	p6q45	,
p6q46:	p6q46	,
p6q47:	p6q47	,
p6q48:	p6q48	,
p6q49:	p6q49	,
p6q50:	p6q50	,
p6q51:	p6q51	,
p6q52:	p6q52	,
p6q53:	p6q53	,
p6q54:	p6q54	,
p6q55:	p6q55	,
p6q56:	p6q56	,
p6q57:	p6q57	,
p6q58:	p6q58	,
p6q59:	p6q59	,
p6q60:	p6q60	,
p6q61:	p6q61	,
p6q62:	p6q62	,
p6q63:	p6q63	,
p6q64:	p6q64	,
p6q65:	p6q65	,
p6q66:	p6q66	,
p6q67:	p6q67	,
p6q68:	p6q68	,
p6q69:	p6q69	,
p6q70:	p6q70	,
p6q71:	p6q71	,
p6q72:	p6q72	,
p6q73:	p6q73	,
p6q74:	p6q74	,
p6q75:	p6q75	,
p6q76:	p6q76	,
p6q77:	p6q77	,
p6q78:	p6q78	,
p6q79:	p6q79	,
p6q80:	p6q80	,
p6q81:	p6q81	,
p6q82:	p6q82	,
p6q83:	p6q83	,
p6q84:	p6q84	,
p6q85:	p6q85	,
p6q86:	p6q86	,
p6q87:	p6q87	,
p6q88:	p6q88	,
p6q89:	p6q89	,
p6q90:	p6q90	,
p6q91:	p6q91	,
p6q92:	p6q92	,
p6q93:	p6q93	,
p6q94:	p6q94	,
p6q95:	p6q95	,
p6q96:	p6q96	,
p6q97:	p6q97	,
p6q98:	p6q98	,
p6q99:	p6q99	,
p6q100:	p6q100	,
p6q101:	p6q101	,
p6q102:	p6q102	,
p6q103:	p6q103	,
p6q104:	p6q104	,
p6q105:	p6q105	,
p6q106:	p6q106	,
p6q107:	p6q107	,
p6q108:	p6q108	,
p6q109:	p6q109	,
p6q110:	p6q110	,
p6q111:	p6q111	,
p6q112:	p6q112	,
p6q113:	p6q113	,
p6q114:	p6q114	,
p6q115:	p6q115	,
p6q116:	p6q116	,
p6q117:	p6q117	,
p6q118:	p6q118	,
p6q119:	p6q119	,
p6q120:	p6q120	,
p6q121:	p6q121	,
p6q122:	p6q122	,
p6q123:	p6q123	,
p6q124:	p6q124	,
p6q125:	p6q125	,
p6q126:	p6q126	,
p6q127:	p6q127	,
p6q128:	p6q128	,
p6q129:	p6q129	,
p6q130:	p6q130	,
p6q131:	p6q131	,
excercise1: excercise1,
excercise2: excercise2,
excercise3: excercise3,
excercise4: excercise4
},


        success: function() {
          window.location.replace("http://szczocik.ddns.net/thankyou.html");
        },
        error: function() {
        	console.log(error);
          alert("There was an error. Try submit again, please!");
        }
   });
});
});
