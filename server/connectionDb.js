import sql from 'mssql'; 

export const sqlConnect = await sql.connect({
	user: 'nodelesson',
  	password: '123',
	server : "USER-PC", 
	database : "lesson", 
	options : { 
	  trustedConnection : true,
	  trustServerCertificate: true
	} 
})
