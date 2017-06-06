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
public class Postit implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private int answers;

	private int clicks;

	@Column(name="content_image")
	private String contentImage;

	@Column(name="content_text")
	private String contentText;

	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	private byte isPost;

	private Timestamp lastModified;

	private int responseTo;

	private String title;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="author")
	private User user;

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

	public byte getIsPost() {
		return this.isPost;
	}

	public void setIsPost(byte isPost) {
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

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}