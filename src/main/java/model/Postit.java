package model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.sql.Timestamp;


/**
 * The persistent class for the postit database table.
 * 
 */
@Entity
@NamedQuery(name="Postit.findAll", query="SELECT p FROM Postit p")
public class Postit implements Serializable, Comparable<Postit> {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private int answers;

	private int clicks;

	@Column(name="content_image")
	private String contentImage;

	@Column(name="content_text")
	private String contentText;

	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	private int isPost;

	private Timestamp lastModified;

	private int responseTo;

	private String title;

	private int author;
	
	@Transient
	private String author_name;
	@Transient
	private String author_surname;
	@Transient 
	private String avatar_path;
	@Transient 
	private int postit_replies;


	public Postit() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAnswers() {
		return this.answers;
	}

	public void setAnswers(int answers) {
		this.answers = answers;
	}

	public int getClicks() {
		return this.clicks;
	}

	public void setClicks(int clicks) {
		this.clicks = clicks;
	}

	public String getContentImage() {
		return this.contentImage;
	}

	public void setContentImage(String contentImage) {
		this.contentImage = contentImage;
	}

	public String getContentText() {
		return this.contentText;
	}

	public void setContentText(String contentText) {
		this.contentText = contentText;
	}

	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getIsPost() {
		return this.isPost;
	}

	public void setIsPost(int isPost) {
		this.isPost = isPost;
	}

	public Timestamp getLastModified() {
		return this.lastModified;
	}

	public void setLastModified(Timestamp lastModified) {
		this.lastModified = lastModified;
	}

	public int getResponseTo() {
		return this.responseTo;
	}

	public void setResponseTo(int responseTo) {
		this.responseTo = responseTo;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getAuthor() {
		return this.author;
	}

	public void setAuthor(int author) {
		this.author = author;
	}


	public String getAuthor_name() {
		return author_name;
	}

	public void setAuthor_name(String author_name) {
		this.author_name = author_name;
	}

	public String getAvatar_path() {
		return avatar_path;
	}

	public void setAvatar_path(String avatar_path) {
		this.avatar_path = avatar_path;
	}

	public String getAuthor_surname() {
		return author_surname;
	}

	public void setAuthor_surname(String author_surname) {
		this.author_surname = author_surname;
	}

	public int getPostit_replies() {
		return postit_replies;
	}

	public void setPostit_replies(int postit_replies) {
		this.postit_replies = postit_replies;
	}

	@Override
	public String toString() {
		return "Postit [id=" + id + ", answers=" + answers + ", clicks="
				+ clicks + ", contentImage=" + contentImage + ", contentText="
				+ contentText + ", date=" + date + ", isPost=" + isPost
				+ ", lastModified=" + lastModified + ", responseTo="
				+ responseTo + ", title=" + title + ", author=" + author + "]";
	}

	@Override
	public int compareTo(Postit o) {
	if(postit_replies == o.postit_replies) {
		return 0;
	}
	
	if (postit_replies > o.postit_replies)
	{
		return 1;
	}
	return -1;
		
	}

}