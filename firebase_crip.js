var _0x90b0=["\x30\x30\x30\x30\x30\x30\x30\x30\x30\x2D\x30","\x6D\x61\x73\x6B","\x23\x6D\x61\x74\x72\x69\x63\x75\x6C\x61","\x30\x30","\x23\x70\x65\x72\x69\x6F\x64\x6F","\x76\x61\x6C","\x30","\x31","\x63\x6C\x69\x63\x6B","\x23\x61\x64\x6D","\x23\x6E\x6F\x6D\x65\x5F\x63\x6F\x6D\x70\x6C\x65\x74\x6F","\x23\x73\x65\x6E\x68\x61","\x20","\x73\x70\x6C\x69\x74","\x6C\x65\x6E\x67\x74\x68","","\x4E\x6F\x6D\x65\x20\x6F\x62\x72\x69\x67\x61\x74\xF3\x72\x69\x6F\x21","\x66\x6F\x63\x75\x73","\x6E\x6F\x6D\x65\x5F\x63\x6F\x6D\x70\x6C\x65\x74\x6F","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x4D\x61\x74\x72\xED\x63\x75\x6C\x61\x20\x6F\x62\x72\x69\x67\x61\x74\xF3\x72\x69\x61\x21","\x6D\x61\x74\x72\x69\x63\x75\x6C\x61","\x4D\x61\x74\x72\xED\x63\x75\x6C\x61\x20\x69\x6E\x63\x6F\x6D\x70\x6C\x65\x74\x61\x21","\x53\x65\x6E\x68\x61\x20\x6F\x62\x72\x69\x67\x61\x74\xF3\x72\x69\x61\x21","\x73\x65\x6E\x68\x61","\x53\x65\x6E\x68\x61\x20\x69\x6E\x63\x6F\x6D\x70\x6C\x65\x74\x61\x21","\x6A\x6F\x69\x6E","\x73\x65\x74","\x41\x6C\x75\x6E\x6F\x73\x2F","\x72\x65\x66","\x64\x61\x74\x61\x62\x61\x73\x65","\x41\x6C\x75\x6E\x6F\x20\x63\x61\x64\x61\x73\x74\x72\x61\x64\x6F\x20\x63\x6F\x6D\x20\x73\x75\x63\x65\x73\x73\x6F\x21","\x76\x61\x6C\x75\x65","\x70\x65\x72\x69\x6F\x64\x6F","\x63\x68\x65\x63\x6B\x65\x64","\x61\x64\x6D","\x23\x69\x6E\x73\x65\x72\x69\x72","\x72\x65\x61\x64\x79"];$(document)[_0x90b0[37]](function(){$(_0x90b0[2])[_0x90b0[1]](_0x90b0[0]);$(_0x90b0[4])[_0x90b0[1]](_0x90b0[3]);$(_0x90b0[9])[_0x90b0[8]](function(){if($(this)[_0x90b0[5]]()== _0x90b0[6]){$(this)[_0x90b0[5]](_0x90b0[7])}else {$(this)[_0x90b0[5]](_0x90b0[6])}});$(_0x90b0[36])[_0x90b0[8]](function(){nome= $(_0x90b0[10])[_0x90b0[5]]();matricula= $(_0x90b0[2])[_0x90b0[5]]();senha= $(_0x90b0[11])[_0x90b0[5]]();periodo= $(_0x90b0[4])[_0x90b0[5]]();periodo= parseInt(periodo);adm= $(_0x90b0[9])[_0x90b0[5]]();faltas= 0;imagem= _0x90b0[6];pontuacao= 0;nome_completo= nome[_0x90b0[13]](_0x90b0[12]);primeiro_nome= nome_completo[0];ultimo_nome= nome_completo[nome_completo[_0x90b0[14]]- 1];senhaCript= senha[_0x90b0[13]](_0x90b0[15]);senhaCript[0]*= 24* 3* 2* 2;senhaCript[1]*= 13* 7* 2* 7;senhaCript[2]*= 69* 5* 8* 11;senhaCript[3]*= 21* 7* 5* 9;senhaCript[4]*= 19* 12* 7* 3;senhaCript[5]*= 97* 9* 2;if(nome== _0x90b0[15]){alert(_0x90b0[16]);document[_0x90b0[19]](_0x90b0[18])[_0x90b0[17]]()}else {if(matricula== _0x90b0[15]){alert(_0x90b0[20]);document[_0x90b0[19]](_0x90b0[21])[_0x90b0[17]]()}else {if(matricula[_0x90b0[14]]< 11){alert(_0x90b0[22]);document[_0x90b0[19]](_0x90b0[21])[_0x90b0[17]]()}else {if(senha== _0x90b0[15]){alert(_0x90b0[23]);document[_0x90b0[19]](_0x90b0[24])[_0x90b0[17]]()}else {if(senha[_0x90b0[14]]< 6){alert(_0x90b0[25]);document[_0x90b0[19]](_0x90b0[24])[_0x90b0[17]]()}else {senha= senhaCript[_0x90b0[26]](_0x90b0[15]);firebase[_0x90b0[30]]()[_0x90b0[29]](_0x90b0[28]+ matricula)[_0x90b0[27]]({nome:nome,matricula:matricula,senha:senha,periodo:periodo,admin:adm,faltas:faltas,imagem:imagem,pontuacao:pontuacao,primeiroNome:primeiro_nome,ultimoNome:ultimo_nome});alert(_0x90b0[31]);document[_0x90b0[19]](_0x90b0[18])[_0x90b0[32]]= _0x90b0[15];document[_0x90b0[19]](_0x90b0[21])[_0x90b0[32]]= _0x90b0[15];document[_0x90b0[19]](_0x90b0[24])[_0x90b0[32]]= _0x90b0[15];document[_0x90b0[19]](_0x90b0[33])[_0x90b0[32]]= _0x90b0[15];document[_0x90b0[19]](_0x90b0[35])[_0x90b0[34]]= false}}}}}})})