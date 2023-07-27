package com.pepp.penweb.qa.testcases;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class PenwebLumpsumWithdrawal3 {

	public static void main(String[] args) {
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://eeplanet12.peba.gov.sk.ca/pepp/penweb/app/login");
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(5));
		
		
		driver.findElement(By.xpath("//input[@id='form-component-1']")).sendKeys("1404458");
		driver.findElement(By.xpath("//input[@id='form-component-2']")).sendKeys("Test@12345");
		driver.findElement(By.xpath("//span[normalize-space()='Log In']")).click();
				
	    System.out.println(driver.getTitle()); 
	    
	    driver.findElement(By.xpath("//button[@class='mx-1 btn pw-button btn-primary']")).click();
	    
	    driver.findElement(By.xpath("//div[@id='sidebar']//span[@class='ml-2 d-inline-block'][normalize-space()='My Investment']")).click();
	    driver.findElement(By.xpath("//div[@id='sidebar']//span[@class='ml-2 d-inline-block nav-item-label'][normalize-space()='VPB Account']")).click();
	    
	    driver.findElement(By.xpath("//span[normalize-space()='Request Lump-sum Payment']")).click();
	    driver.findElement(By.xpath("//input[@id='form-component-5']")).sendKeys("2250");
	    driver.findElement(By.xpath("//input[@id='form-component-7']")).sendKeys("2250");
	    driver.findElement(By.xpath("//button[@class='mx-1 btn pw-button btn-primary']")).click();
	    
	    driver.findElement(By.xpath("//input[@name='checkConfirm']")).click();
	    driver.findElement(By.xpath("//button[@type='button']//span[contains(text(),'Confirm')]")).click();
	    

	}

}
