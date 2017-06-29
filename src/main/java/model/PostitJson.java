package model;

import java.sql.Timestamp;
import java.util.Date;



import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;




/**
 * Class used for unmarshalling from the provided XML.
 * For usage please see PersonProcessor.java under control.
 * @author Chris
 *
 */
@XmlRootElement (name = "postit")
public class PostitJson {

	@XmlElement(name = "id",required = true)
	private int id;
	@XmlElement(name = "answers",required = true)
	private int answers;
	@XmlElement(name = "clicks",required = true)
	private int clicks;
	@XmlElement(name = "contentImage",required = true)
	private String contentImage;
	@XmlElement(name = "contentText",required = true)
	private String contentText;
	@XmlElement(name = "date",required = true)
	private Date date;
	@XmlElement(name = "isPost",required = true)
	private int isPost;
	@XmlElement(name = "lastModified",required = true)
	private Timestamp lastModified;
	@XmlElement(name = "responseTo",required = true)
	private int responseTo;
	@XmlElement(name = "title",required = true)
	private String title;
	@XmlElement(name = "author",required = true)
	private int author;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAnswers() {
		return answers;
	}
	public void setAnswers(int answers) {
		this.answers = answers;
	}
	public int getClicks() {
		return clicks;
	}
	public void setClicks(int clicks) {
		this.clicks = clicks;
	}
	public String getContentImage() {
		return contentImage;
	}
	public void setContentImage(String contentImage) {
		this.contentImage = contentImage;
	}
	public String getContentText() {
		return contentText;
	}
	public void setContentText(String contentText) {
		this.contentText = contentText;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getIsPost() {
		return isPost;
	}
	public void setIsPost(int isPost) {
		this.isPost = isPost;
	}
	public Timestamp getLastModified() {
		return lastModified;
	}
	public void setLastModified(Timestamp lastModified) {
		this.lastModified = lastModified;
	}
	public int getResponseTo() {
		return responseTo;
	}
	public void setResponseTo(int responseTo) {
		this.responseTo = responseTo;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getAuthor() {
		return author;
	}
	public void setAuthor(int author) {
		this.author = author;
	}
	
	
	

}
