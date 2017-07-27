package control;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.StringReader;
import java.sql.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.transform.stream.StreamSource;

import org.eclipse.persistence.jaxb.JAXBContextProperties;
import org.eclipse.persistence.jaxb.JAXBMarshaller;
import org.eclipse.persistence.jaxb.JAXBUnmarshaller;
import org.eclipse.persistence.jaxb.UnmarshallerProperties;





import model.PersonJson;
import model.Postit;
import model.PostitJson;
import model.User;



public class JsonUnmarshaller  {
	
	public User UnmarshalJsonUser(File json){
		
		User user = new User();
		
		try {
				//File json = new File("src/main/java/control/exampleuser.json");
				// Create a JaxBContext
				JAXBContext jc;
				
					jc = JAXBContext.newInstance(PersonJson.class);

				
				
				//Scanner input = new Scanner(new File("src/main/java/control/exampleuser.json"));
				  Scanner input;
				try {
					input = new Scanner(json);
					while (input.hasNextLine())
					{
					   System.out.println(input.nextLine());
					}
				} catch (FileNotFoundException e) {
					System.out.println("Corrupt File");
					e.printStackTrace();
				}
		
	
				Unmarshaller unmarshaller = jc.createUnmarshaller();
				unmarshaller.setProperty(UnmarshallerProperties.MEDIA_TYPE,
						"application/json");

				// Set it to true if you need to include the JSON root element in the
				// JSON input
				unmarshaller.setProperty(UnmarshallerProperties.JSON_INCLUDE_ROOT, true);

				// Create a POJO from the JSON
				PersonJson jp = (PersonJson) unmarshaller.unmarshal(json);
			
				
				
				user.setAvatar(jp.getAvatar());
				user.setBirthDate(new Date(jp.getBirthDate()));
				user.setEmail(jp.getEmail());
				user.setFax(jp.getFax());
				//user.setId(jp.getId());
				user.setName(jp.getName());
				user.setSurname(jp.getSurname());
				user.setPassword(jp.getPassword());
				user.setPhone(jp.getPassword());
				user.setLocation(jp.getLocation());
				user.setPosition(jp.getPosition());
				user.setGender(jp.getGender());
				user.setRegisterDate(jp.getRegisterDate());
				System.out.println(user.toString());
				
				
				
				
		}
	 catch (JAXBException e) {
		
		e.printStackTrace();
	}
		
		return user;
}
	
	
	public Postit UnmarshalJsonPostit (File json){
		
		Postit postit = new Postit();
		
		try {
				//File json = new File("src/main/java/control/exampleuser.json");
				// Create a JaxBContext
				JAXBContext jc;
				
					jc = JAXBContext.newInstance(PostitJson.class);

				
				
				//Scanner input = new Scanner(new File("src/main/java/resources/exampleuser.json"));
				  Scanner input;
				try {
					input = new Scanner(json);
					while (input.hasNextLine())
					{
					   System.out.println(input.nextLine());
					}
				} catch (FileNotFoundException e) {
					System.out.println("Corrupt File");
					e.printStackTrace();
				}
		
	
				Unmarshaller unmarshaller = jc.createUnmarshaller();
				unmarshaller.setProperty(UnmarshallerProperties.MEDIA_TYPE,
						"application/json");

				// Set it to true if you need to include the JSON root element in the
				// JSON input
				unmarshaller.setProperty(UnmarshallerProperties.JSON_INCLUDE_ROOT, true);

				// Create a POJO from the JSON
				PostitJson jp = (PostitJson) unmarshaller.unmarshal(json);
			
				// TODO: Add postit setters
				
				postit.setAuthor(jp.getAuthor());
				postit.setTitle(jp.getTitle());
				postit.setContentText(jp.getContentText());
				postit.setContentImage(jp.getContentImage());
				postit.setClicks(jp.getClicks());
				postit.setAnswers(jp.getAnswers());
				postit.setIsPost(jp.getIsPost());
				postit.setResponseTo(jp.getResponseTo());
				
				
				
				
				System.out.println(postit.toString());
				
				
				
				
		}
	 catch (JAXBException e) {
		
		e.printStackTrace();
	}
		
		return postit;
}


}
