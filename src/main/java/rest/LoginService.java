package rest;


import java.io.File;
import java.io.InputStream;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;







import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;











import model.Postit;
import model.User;



import com.fasterxml.jackson.core.JsonProcessingException;

import control.*;





import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



@Path("/login")
public class LoginService {
	 private static final transient Logger log = LoggerFactory.getLogger(LoginService.class);


	@GET
	@Consumes("application/json")
	@Path("/{name}/{pass}")
	public Response login(@PathParam("name") String name, @PathParam("pass") String pass) {
		

	    log.info("My First Apache Shiro Application");

	    //1.
	    Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");

	    //2.
	    SecurityManager securityManager = factory.getInstance();

	    //3.
	    SecurityUtils.setSecurityManager(securityManager);
	    
	    Subject currentUser = SecurityUtils.getSubject();
	    Session session = currentUser.getSession();
	    session.setAttribute( "login", "YES!" );
	    UsernamePasswordToken token = new UsernamePasswordToken( name, pass );
	   //UsernamePasswordToken token = new UsernamePasswordToken( "student", "student" );
	   
	    token.setRememberMe(true);
	    currentUser.login(token);
	    System.out.println();System.out.println();
	    log.info( "User [" + currentUser.getPrincipal() + "] logged in successfully." );
	    System.out.println();System.out.println();
	    
	    return Response.status(200).entity(session.getId().toString()).build();
		
}
	
	@GET
	@Consumes("application/json")
	@Path("/check")
	public Response login() {
		

		log.info( "Check if still logged in" );

	    //1.
	    Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");

	    //2.
	    SecurityManager securityManager = factory.getInstance();

	    //3.
	    SecurityUtils.setSecurityManager(securityManager);
	    
	    Subject currentUser = SecurityUtils.getSubject();
	    Session session = currentUser.getSession();
	    session.setAttribute( "login", "YES!" );

	    System.out.println();System.out.println();
	    log.info( "User [" + currentUser.getPrincipal() + "] still logged in boss!." );
	    System.out.println();System.out.println();

	    return Response.status(200).entity(session.getId().toString()).build();
		
}
	
	@GET
	@Consumes("application/json")
	@Path("/logout")
	public Response logout() {
		

		log.info( "Commence log out.");

	    //1.
	    Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");

	    //2.
	    SecurityManager securityManager = factory.getInstance();

	    //3.
	    SecurityUtils.setSecurityManager(securityManager);
	    
	    Subject currentUser = SecurityUtils.getSubject();
	    Session session = currentUser.getSession();
	    
	    System.out.println();System.out.println();
	    log.info( "User [" + currentUser.getPrincipal() + "] will log out!." );
	    currentUser.logout();


	  
	    System.out.println();System.out.println();

	    return Response.status(200).entity(session.getId().toString()).build();
		
}
}