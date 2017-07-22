package rest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import model.User;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;


import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import control.UserManagement;

@Path("/file")
public class UploadFileService {
	
	

	@POST
	@Path("/avatar")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response putImage(

	@FormDataParam("image") InputStream stream,
	@FormDataParam("image") FormDataContentDisposition fileDetail


	) {
	
		if(stream == null){System.out.println("FUCKING NULL!");}
		
		System.out.println("-------------------------------------------------- 1");
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}
		

		System.out.println("-------------------------------------------------- 2");
		String home = System.getProperty("catalina.base");
		 String location = "/webapps/colab/resources/avatar/";
		 String location2 = "/colab/resources/avatar/";
		home = home + location;
		
		String userid = Integer.toString(UserManagement.getUserbyMail(SecurityUtils.getSubject().getPrincipal().toString()).getId());
		
		String uploadedFileLocation = home  + userid + ".jpg";

		writeToFile(stream, uploadedFileLocation);

		// String output = location +  userid + ".jpg";
		String output =  "{ \"location\":\"" + location2 + userid + ".jpg"+"\"}";
		
		System.out.println("File Uploaded to: " + uploadedFileLocation);

		
		return Response.status(200).entity(output).build();

	}
	
	
	

	@POST
	@Path("/postit")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response putPostit(

	@FormDataParam("image") InputStream stream,
	@FormDataParam("image") FormDataContentDisposition fileDetail


	) {
	
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}
		

		String home = System.getProperty("catalina.base");
		String location = "/webapps/colab/resources/postit/";
		String location2 = "/colab/resources/postit/";
		home = home + location;
		
		
		
		User current = UserManagement.getUserbyMail(SecurityUtils.getSubject().getPrincipal().toString());
		String userid = Integer.toString(current.getId());
		int index = new File(home).listFiles().length;
		String uploadedFileLocation = home  + userid + "-" + index +  ".jpg";

		writeToFile(stream, uploadedFileLocation);

		String output =  "{ \"location\":\"" + location2 + userid + "-" + index +  ".jpg"+"\"}";
	
		
		
		System.out.println("File Uploaded to: " + uploadedFileLocation);

		
		return Response.status(200).entity(output).build();

	}
	
	
	
	/*

	@POST
	@Path("/avatar")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadAvatar(
		@FormDataParam("file") InputStream uploadedInputStream,
		@FormDataParam("file") FormDataContentDisposition fileDetail) throws IOException {

		
		if(uploadedInputStream == null){System.out.println("FUCKING NULL!");}
		
		System.out.println("-------------------------------------------------- 1");
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}
		

		System.out.println("-------------------------------------------------- 2");
		String home = System.getProperty("catalina.base");
		String location = "/webapps/colab/resources/avatar/";
		home = home + location;
		
		String userid = Integer.toString(UserManagement.getUserbyMail(SecurityUtils.getSubject().getPrincipal().toString()).getId());
		
		String uploadedFileLocation = home  + userid + ".jpg";

		writeToFile(uploadedInputStream, uploadedFileLocation);

		String output = location +  userid + ".jpg";
	
		
		System.out.println("File Uploaded to: " + uploadedFileLocation);

		
		return Response.status(200).entity(output).build();

	}
	
	

	@POST
	@Path("/postit")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadPostit(
		@FormParam("file") InputStream uploadedInputStream,
		@FormParam("file") FormDataContentDisposition fileDetail) throws IOException {

		

		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}
		

		String home = System.getProperty("catalina.base");
		String location = "/webapps/colab/resources/postit/";
		home = home + location;
		
		
		
		User current = UserManagement.getUserbyMail(SecurityUtils.getSubject().getPrincipal().toString());
		String userid = Integer.toString(current.getId());
		int index = new File(home).listFiles().length;
		String uploadedFileLocation = home  + userid + "-" + index +  ".jpg";

		writeToFile(uploadedInputStream, uploadedFileLocation);

		String output =  location + userid + "-" + index +  ".jpg";
	
		
		
		System.out.println("File Uploaded to: " + uploadedFileLocation);

		
		return Response.status(200).entity(output).build();

	}


*/

	// save uploaded file to new location
	private void writeToFile(InputStream uploadedInputStream,
		String uploadedFileLocation) {

		try {
			OutputStream out = new FileOutputStream(new File(
					uploadedFileLocation));
			int read = 0;
			byte[] bytes = new byte[1024];

			if(uploadedInputStream == null){System.out.println("FUCKING NULL!");}
			System.out.println("STARTING WRITE PROCESS!!");
			out = new FileOutputStream(new File(uploadedFileLocation));
			while ((read = uploadedInputStream.read(bytes)) != -1 && uploadedInputStream != null) {
				System.out.println("NOT NULL!!");
				out.write(bytes, 0, read);
			}
			out.flush();
			out.close();
		} catch (IOException e) {

			e.printStackTrace();
		}


	}
	
	
}







