package tests;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Shiro {
	
    private static final transient Logger log = LoggerFactory.getLogger(Shiro.class);

	public static void main(String[] args) {

	    log.info("My First Apache Shiro Application");

	    //1.
	    Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");

	    //2.
	    SecurityManager securityManager = factory.getInstance();

	    //3.
	    SecurityUtils.setSecurityManager(securityManager);
	    
	    Subject currentUser = SecurityUtils.getSubject();
	    Session session = currentUser.getSession();
	    session.setAttribute( "someKey", "aValue" );
	    UsernamePasswordToken token = new UsernamePasswordToken( "admin@admin.de", "admin" );
	   //UsernamePasswordToken token = new UsernamePasswordToken( "student", "student" );
	   
	   token.setRememberMe(true);
	    currentUser.login(token);
	    System.out.println();System.out.println();
	    log.info( "User [" + currentUser.getPrincipal() + "] logged in successfully." );
	    System.out.println();System.out.println();
	    
	    if ( currentUser.isPermitted("52") )  {
	    	
	        log.info("User is permitted." );
	    } else {
	        log.info( "Not permitted." );
	    }

	    
	    
	    if ( currentUser.hasRole( "1" ) ) {
	    	
	        log.info("Yes Admin!" );
	    } else {
	        log.info( "No Admin!." );
	    }

	   System.out.println( currentUser.toString());

	    System.exit(0);
	}
}
