package control;


import java.io.File;

import javax.servlet.ServletContextEvent;  
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.util.Factory;


@WebListener
public class ServerStartup implements ServletContextListener {
	
	boolean first_start = true;

	private boolean setup_complete = false;
	
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
    	
    	//Create the Apache Shiro Security Manager and make it available to the REST classes.
    	
        System.out.println("Server Startup.");
        if(first_start){PostitManagement.createCounter(); first_start = false;}
	    //1.
	    Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");

	    //2.
	    SecurityManager securityManager = factory.getInstance();

	    //3.
	    SecurityUtils.setSecurityManager(securityManager);
	    
	    String home = System.getProperty("catalina.base");


	    System.out.println(home);
	    

   
	    
	    
	    File webapps = new File(home + "/webapps");


	    if (!webapps.exists()) {
	        System.out.println("creating directory: " + webapps.getName());
	        boolean result = false;

	        try{
	            webapps.mkdir();
	            result = true;
	        } 
	        catch(SecurityException se){
	            //handle it
	        }        
	        if(result) {    
	            System.out.println("DIR created");  
	        }
	    }
	    
	    
	    File resources = new File(home + "/webapps/colab/resources");


	    if (!resources.exists()) {
	        System.out.println("creating directory: " + resources.getName());
	        

	        try{
	            resources.mkdir();
	        } 
	        catch(SecurityException se){
	            //handle it
	        }        

	    }
	    
	    File colab = new File(home + "/webapps/colab/");
	    
	    if (!colab.exists()) {
	        System.out.println("creating directory: " + colab.getName());
	        boolean result = false;

	        try{
	            colab.mkdir();
	            result = true;
	        } 
	        catch(SecurityException se){
	            //handle it
	        }        
	        if(result) {    
	            System.out.println("DIR created");  
	        }
	    }


	    
	    
	    
File avatar_dir = new File(home + "/webapps/colab/resources/avatar");


if (!avatar_dir.exists()) {
    System.out.println("creating directory: " + avatar_dir.getName());
    boolean result = false;

    try{
        avatar_dir.mkdir();
        result = true;
    } 
    catch(SecurityException se){
        //handle it
    }        
    if(result) {    
        System.out.println("DIR created");  
    }
}

File postit_dir = new File(home + "/webapps/colab/resources/postit");


if (!postit_dir.exists()) {
    System.out.println("creating directory: " + postit_dir.getName());
    boolean result = false;

    try{
        postit_dir.mkdir();
        result = true;
    } 
    catch(SecurityException se){
        //handle it
    }        
    if(result) {    
        System.out.println("DIR created");  
    }
}



	    
	    
	    
	    


    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

        System.out.println("Server shutting down.");
    }
}
