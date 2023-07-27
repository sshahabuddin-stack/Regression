package com.pepp.penweb.qa.testcases;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class PenwebSignIn {

	public static void main(String[] args) {
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://eeplanet12.peba.gov.sk.ca/pepp/penweb/app/login");
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(5));
		
		
		driver.findElement(By.xpath("//input[@id='form-component-1']")).sendKeys("1068584");
		driver.findElement(By.xpath("//input[@id='form-component-2']")).sendKeys("Test@12345");
		driver.findElement(By.xpath("//span[normalize-space()='Log In']")).click();
				
	    System.out.println(driver.getTitle()); 
	    
	    

	}

}
