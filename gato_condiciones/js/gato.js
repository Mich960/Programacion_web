var ganador=0;
var disp=9;
var juego_actual = new Array(3);
for(var i=1 ; i <=3 ; i++){
	juego_actual[i]= new Array(3);
	for(var j=1;j<=3;j++){
		juego_actual[i][j]=0;
		//console.log(juego_actual[i][j]+"("+i+","+j+") - ");
	}
}
juego_actual[1][1]=1;
disp--;


function revisar(boton){
	//console.log(boton);	 //			*button
	//console.log(boton.id); //			*ij
	//console.log(boton.innerHTML); // 	*<i...>
	//console.log(boton.classList);

	aux = boton.innerHTML;
	if( aux == '<i class="fa fa-times fa-4x" aria-hidden="true"></i>' || aux == '<i class="fa fa-circle-o fa-4x" aria-hidden="true"></i>' ){
		alert("Elige otra casilla");
	}else{
		//el usario tira
		boton.innerHTML = "<i class='fa fa-circle-o fa-4x' aria-hidden='true'></i>";
		boton.classList.remove("btn-outline-success");
		boton.classList.add("btn-outline-primary");
		var reglon= parseInt(boton.id/10);
		var columna= boton.id%10;
		juego_actual[ reglon ][ columna ]=2;
		disp--;
		s_wins();
		if(ganador==0){
			if( reglon == 2 && columna == 2 ) {
				//console.log("22");
				if(juego_actual[3][3]==0){
					//console.log(document.getElementById("33").innerHTML);
					juego_actual[3][3]=1;
					document.getElementById("33").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
					document.getElementById("33").classList.remove("btn-outline-success");
					document.getElementById("33").classList.add("btn-outline-danger");
					disp--;
					s_wins();
					if(ganador==1){
						fin();
					}
				}else{
					if(juego_actual[3][2]==0){
						juego_actual[3][2]=1;
						document.getElementById("32").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
						document.getElementById("32").classList.remove("btn-outline-success");
						document.getElementById("32").classList.add("btn-outline-danger");
						disp--;
						s_wins();
						if(ganador==1){
							fin();
						}
					}
				}
			}else{//no centro
				console.log("No centro");
				if(reglon==1 && columna==2 ){
					if(disp!=1){
						if(juego_actual[3][1]==0){
							juego_actual[3][1]=1;
							document.getElementById("31").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
							document.getElementById("31").classList.remove("btn-outline-success");
							document.getElementById("31").classList.add("btn-outline-danger");
							disp--;
							s_wins();
							if(ganador==1){
								fin();
							}
						}else if(juego_actual[3][3]==0){
							juego_actual[3][3]=1;
							document.getElementById("33").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
							document.getElementById("33").classList.remove("btn-outline-success");
							document.getElementById("33").classList.add("btn-outline-danger");
							disp--;
							s_wins();
							if(ganador==1){
								fin();
							}
						}else{
							console.log("que");
						}
					}else{
						solo_uno();
					}
				}else if( reglon == 2 && columna==1 ){
					if(juego_actual[2][2]==0){
						juego_actual[2][2]=1;
						document.getElementById("22").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
						document.getElementById("22").classList.remove("btn-outline-success");
						document.getElementById("22").classList.add("btn-outline-danger");
						disp--;
						s_wins();
						if(ganador==1){
							fin();
						}
					}else{
						if(disp!=1){
							if(juego_actual[3][1]==0){
								juego_actual[3][1]=1;
								document.getElementById("31").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
								document.getElementById("31").classList.remove("btn-outline-success");
								document.getElementById("31").classList.add("btn-outline-danger");
								disp--;
								s_wins();
								if(ganador==1){
									fin();
								}
							}else if(juego_actual[1][2]==0){
								juego_actual[3][1]=1;
								document.getElementById("12").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
								document.getElementById("12").classList.remove("btn-outline-success");
								document.getElementById("12").classList.add("btn-outline-danger");
								disp--;
								s_wins();
								if(ganador==1){
									fin();
								}
							}else if(juego_actual[3][2]==0){
								juego_actual[3][2]=1;
								document.getElementById("32").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
								document.getElementById("32").classList.remove("btn-outline-success");
								document.getElementById("32").classList.add("btn-outline-danger");
								disp--;
								s_wins();
								if(ganador==1){
									fin();
								}
							}else{
								console.log("Aqui4");
							}
						}else{
							solo_uno();
						}
					}
				}else if( reglon ==3  && columna==2){

					if(juego_actual[3][1] == 1  && juego_actual[2][1]==0){
						juego_actual[2][1]=1;
						document.getElementById("21").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
						document.getElementById("21").classList.remove("btn-outline-success");
						document.getElementById("21").classList.add("btn-outline-danger");
						disp--;
						s_wins();
						if(ganador==1){
							fin();
						}

					}else if(juego_actual[3][3] == 1  && juego_actual[2][2]==0){
						juego_actual[2][2]=1;
						document.getElementById("22").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
						document.getElementById("22").classList.remove("btn-outline-success");
						document.getElementById("22").classList.add("btn-outline-danger");
						disp--;
						s_wins();
						if(ganador==1){
							fin();
						}
					}else{

						if(disp==3){
							if(juego_actual[3][3]==0){
								juego_actual[3][3]=1;
								document.getElementById("33").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
								document.getElementById("33").classList.remove("btn-outline-success");
								document.getElementById("33").classList.add("btn-outline-danger");
								disp--;
								s_wins();
								if(ganador==1){
									fin();
								}
							}
						}else{
							if(disp==1){
								solo_uno();
								s_wins();
								if(ganador==1){
									fin();
								}
							}else {
								if(juego_actual[1][3]==0){
									juego_actual[1][3]=1;
									document.getElementById("13").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
									document.getElementById("13").classList.remove("btn-outline-success");
									document.getElementById("13").classList.add("btn-outline-danger");
									disp--;
									s_wins();
									if(ganador==1){
										fin();
									}
								}else{
									console.log("aqui2");
								}
								
							}
							
						}
					}
				}else{
					if(juego_actual[1][3]==2  && juego_actual[2][2]==2 && juego_actual[3][1]==0){
						juego_actual[3][1]=1;
						document.getElementById("31").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
						document.getElementById("31").classList.remove("btn-outline-success");
						document.getElementById("31").classList.add("btn-outline-danger");
						disp--;
						s_wins();
						if(ganador==1){
							fin();
						}
					}else{
						if(juego_actual[2][2]==0){
							juego_actual[2][2]=1;
							document.getElementById("22").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
							document.getElementById("22").classList.remove("btn-outline-success");
							document.getElementById("22").classList.add("btn-outline-danger");
							disp--;
							s_wins();
							if(ganador==1){
								fin();
							}
						}else{
							if( juego_actual[1][3]==2  && juego_actual[3][3]==2 && juego_actual[2][3]==0 ){
								juego_actual[2][3]=1;
								document.getElementById("23").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
								document.getElementById("23").classList.remove("btn-outline-success");
								document.getElementById("23").classList.add("btn-outline-danger");
								disp--;
								s_wins();
								if(ganador==1){
									fin();
								}
							}else{
								//disp 
								if(juego_actual[2][2]==1 && juego_actual[3][3]==0){
									juego_actual[3][3]=1;
									document.getElementById("33").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
									document.getElementById("33").classList.remove("btn-outline-success");
									document.getElementById("33").classList.add("btn-outline-danger");
									disp--;
									s_wins();
									if(ganador==1){
										fin();
									}
								}else{
									if(juego_actual[2][3]==0){
										juego_actual[2][3]=1;
										document.getElementById("23").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
										document.getElementById("23").classList.remove("btn-outline-success");
										document.getElementById("23").classList.add("btn-outline-danger");
										disp--;
										s_wins();
										if(ganador==1){
											fin();
										}
									}else{
										if(disp==1){
											solo_uno();
										}else{
											if(juego_actual[2][2]==2 && juego_actual[2][3]==2 && juego_actual[2][1]==0){
												juego_actual[2][1]=1;
												document.getElementById("21").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
												document.getElementById("21").classList.remove("btn-outline-success");
												document.getElementById("21").classList.add("btn-outline-danger");
												disp--;
												s_wins();
												if(ganador==1){
													fin();
												}
											}else if(juego_actual[2][2]==2 && juego_actual[3][1]==2 && juego_actual[1][3]==0){
												juego_actual[2][1]=1;
												document.getElementById("13").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
												document.getElementById("13").classList.remove("btn-outline-success");
												document.getElementById("13").classList.add("btn-outline-danger");
												disp--;
												s_wins();
												if(ganador==1){
													fin();
												}
											}else if(juego_actual[1][2]==0 && disp==3){
												juego_actual[1][2]=1;
												document.getElementById("12").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
												document.getElementById("12").classList.remove("btn-outline-success");
												document.getElementById("12").classList.add("btn-outline-danger");
												disp--;
												s_wins();
												if(ganador==1){
													fin();
												}
											}else if(juego_actual[3][3]==2 && juego_actual[2][3]==2 && juego_actual[1][3]==0){
												juego_actual[2][1]=1;
												document.getElementById("13").innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
												document.getElementById("13").classList.remove("btn-outline-success");
												document.getElementById("13").classList.add("btn-outline-danger");
												disp--;
												s_wins();
												if(ganador==1){
													fin();
												}
											}else{
												console.log("Aqui9");
											}
											
										}
										
									}
									
								}
							}
						}
					}
				}
			}
		}else{
			console.log("bug?x2");
			fin();
		}
	}

	
}


function solo_uno(){
	for(var m=1; m<=3 ; m++){
		for(var n=1; n<=3 ; n++){
			if(juego_actual[m][n]==0){
				var aux2 = m.toString()+n.toString();
				juego_actual[m][n]=1;
				document.getElementById(aux2).innerHTML = "<i class='fa fa-times fa-4x' aria-hidden='true'></i>";
				document.getElementById(aux2).classList.remove("btn-outline-success");
				document.getElementById(aux2).classList.add("btn-outline-danger");
				disp--;
				s_wins();
				if(ganador==1){
					fin();
				}
			}
		}
	}
}

function s_wins(){
//gano jugador
	if( juego_actual[1][1] == 2 && juego_actual[1][2]==2 && juego_actual[1][3] == 2 ){
		alert("ganaste");
		ganador=1;
	}
	if( juego_actual[2][1] == 2 && juego_actual[2][2]==2 && juego_actual[2][3] == 2 ){
		alert("ganaste");
		ganador=1;
	}
	if( juego_actual[3][1] == 2 && juego_actual[3][2]==2 && juego_actual[3][3] == 2 ){
		alert("ganaste");
		ganador=1;
	}

	if( juego_actual[1][1] == 2 && juego_actual[2][1]==2 && juego_actual[3][1] == 2 ){
		alert("ganaste");
		ganador=1;
	}
	if( juego_actual[1][2] == 2 && juego_actual[2][2]==2 && juego_actual[3][2] == 2 ){
		alert("ganaste");
		ganador=1;
	}
	if( juego_actual[1][3] == 2 && juego_actual[2][3]==2 && juego_actual[3][3] == 2 ){
		alert("ganaste");
		ganador=1;
	}
	//diagonal
	if( juego_actual[1][1] == 2 && juego_actual[2][2]==2 && juego_actual[3][3] == 2 ){
		alert("ganaste");
		ganador=1;
	}

//gano maquina
	if( juego_actual[1][1] == 1 && juego_actual[1][2]==1 && juego_actual[1][3] == 1 ){
		alert("perdiste");
		ganador=1;
	}
	if( juego_actual[2][1] == 1 && juego_actual[2][2]==1 && juego_actual[2][3] == 1 ){
		alert("perdiste");
		ganador=1;
	}
	if( juego_actual[3][1] == 1 && juego_actual[3][2]==1 && juego_actual[3][3] == 1 ){
		alert("perdiste");
		ganador=1;
	}

	if( juego_actual[1][1] == 1 && juego_actual[2][1]==1 && juego_actual[3][1] == 1 ){
		alert("perdiste");
		ganador=1;
	}
	if( juego_actual[1][2] == 1 && juego_actual[2][2]==1 && juego_actual[3][2] == 1 ){
		alert("perdiste");
		ganador=1;
	}
	if( juego_actual[1][3] == 1 && juego_actual[2][3]==1 && juego_actual[3][3] == 1 ){
		alert("perdiste");
		ganador=1;
	}
	//diagonal
	if( juego_actual[1][1] == 1 && juego_actual[2][2]==1 && juego_actual[3][3] == 1 ){
		alert("perdiste");
		ganador=1;
	}

//empate
	if(disp == 0){
		alert("Empate");
		ganador=1;
	}

}


function fin(){
	ganador=0;
	disp=9;
	for(var i=1 ; i <=3 ; i++){
		for(var j=1;j<=3;j++){
			juego_actual[i][j]=0;
		}
	}
	juego_actual[1][1]=1;
	disp--;

	location.reload();
}


	/*document.getElementById("12").innerHTML = "<i class='fa fa-hand-paper-o fa-4x' aria-hidden='true'></i>";
	if (document.getElementById("12").classList == "btn-outline-primary" ){
		document.getElementById("12").classList.remove("btn-outline-primary");
	}else{
		document.getElementById("12").classList.remove("btn-outline-danger");
	}
	document.getElementById("12").classList.add("btn-outline-success");

	document.getElementById("13").innerHTML = "<i class='fa fa-hand-paper-o fa-4x' aria-hidden='true'></i>";
	if (document.getElementById("13").classList == "btn-outline-primary" ){
		document.getElementById("13").classList.remove("btn-outline-primary");
	}else{
		document.getElementById("13").classList.remove("btn-outline-danger");
	}
	document.getElementById("13").classList.add("btn-outline-success");


	document.getElementById("21").innerHTML = "<i class='fa fa-hand-paper-o fa-4x' aria-hidden='true'></i>";
	if (document.getElementById("21").classList == "btn-outline-primary" ){
		document.getElementById("21").classList.remove("btn-outline-primary");
	}else{
		document.getElementById("21").classList.remove("btn-outline-danger");
	}
	document.getElementById("21").classList.add("btn-outline-success");


	document.getElementById("22").innerHTML = "<i class='fa fa-hand-paper-o fa-4x' aria-hidden='true'></i>";
	if (document.getElementById("22").classList == "btn-outline-primary" ){
		document.getElementById("22").classList.remove("btn-outline-primary");
	}else{
		document.getElementById("22").classList.remove("btn-outline-danger");
	}
	document.getElementById("22").classList.add("btn-outline-success");

	document.getElementById("23").innerHTML = "<i class='fa fa-hand-paper-o fa-4x' aria-hidden='true'></i>";
	if (document.getElementById("23").classList == "btn-outline-primary" ){
		document.getElementById("23").classList.remove("btn-outline-primary");
	}else{
		document.getElementById("23").classList.remove("btn-outline-danger");
	}
	document.getElementById("23").classList.add("btn-outline-success");

// ************
	document.getElementById("31").innerHTML = "<i class='fa fa-hand-paper-o fa-4x' aria-hidden='true'></i>";
	if (document.getElementById("31").classList == "btn-outline-primary" ){
		document.getElementById("31").classList.remove("btn-outline-primary");
	}else{
		document.getElementById("31").classList.remove("btn-outline-danger");
	}
	document.getElementById("31").classList.add("btn-outline-success");


	document.getElementById("32").innerHTML = "<i class='fa fa-hand-paper-o fa-4x' aria-hidden='true'></i>";
	if (document.getElementById("32").classList == "btn-outline-primary" ){
		document.getElementById("32").classList.remove("btn-outline-primary");
	}else{
		document.getElementById("32").classList.remove("btn-outline-danger");
	}
	document.getElementById("32").classList.add("btn-outline-success");

	document.getElementById("33").innerHTML = "<i class='fa fa-hand-paper-o fa-4x' aria-hidden='true'></i>";
	if (document.getElementById("33").classList == "btn-outline-primary" ){
		document.getElementById("33").classList.remove("btn-outline-primary");
	}else{
		document.getElementById("33").classList.remove("btn-outline-danger");
	}
	document.getElementById("33").classList.add("btn-outline-success");	
*/



/*
	*-- LINUX --*
	sftp://ic2014020186@ndikandi.utm ?
	->HOME
		->USUARIOS
			->ic2014010186
				->public_html

				->crear carpeta prueba

				//copiar seguro
					scp  - copias de una maquina a otra atravez de un password y un login
					-r   para que sea de manera recursiva

				//cambiar permisos
					chmod -R 755 *	


-> phpmyadmin
->Mysql
	encargado
	aceptado0

*/


