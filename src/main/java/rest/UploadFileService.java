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
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import model.User;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;

import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataParam;

import control.UserManagement;

@Path("/file")
public class UploadFileService {

	@POST
	@Path("/avatar")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadAvatar(
		@FormDataParam("file") InputStream uploadedInputStream,
		@FormDataParam("file") FormDataContentDisposition fileDetail) throws IOException {

		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}
		

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
		@FormDataParam("file") InputStream uploadedInputStream,
		@FormDataParam("file") FormDataContentDisposition fileDetail) throws IOException {

		
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



	// save uploaded file to new location
	private void writeToFile(InputStream uploadedInputStream,
		String uploadedFileLocation) {

		try {
			OutputStream out = new FileOutputStream(new File(
					uploadedFileLocation));
			int read = 0;
			byte[] bytes = new byte[1024];

			out = new FileOutputStream(new File(uploadedFileLocation));
			while ((read = uploadedInputStream.read(bytes)) != -1) {
				out.write(bytes, 0, read);
			}
			out.flush();
			out.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}

}