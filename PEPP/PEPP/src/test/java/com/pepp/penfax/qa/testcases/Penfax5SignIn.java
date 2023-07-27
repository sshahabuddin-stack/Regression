package com.pepp.penfax.qa.testcases;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Penfax5SignIn {

	public static void main(String[] args) {
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://test1-penfax1.privapp.tortest.oraclevcn.com:7003/Penfax5/login.html");
		
		driver.findElement(By.name("j_username")).sendKeys("ssyed");
		driver.findElement(By.name("j_password")).sendKeys("Winter@2023");
		driver.findElement(By.name("SignIn")).click();
				
	    System.out.println(driver.getTitle()); 
	    
	    driver.quit();


	}

}
