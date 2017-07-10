package control;


import javax.servlet.ServletContextEvent;  
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.util.Factory;

@WebListener
public class ServerStartup implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
    	
    	//Create the Apache Shiro Security Manager and make it available to the REST classes.
    	
        System.out.println("Server Startup.");
	    //1.
	    Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");

	    //2.
	    SecurityManager securityManager = factory.getInstance();

	    //3.
	    SecurityUtils.setSecurityManager(securityManager);

    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

        System.out.println("Server shutting down.");
    }
}
