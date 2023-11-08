package com.empSer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empSer.entity.Employee;
import com.empSer.service.EmployeeServiceImpl;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeController {

	@Autowired
	private EmployeeServiceImpl service;
	
	@PostMapping("/addUser")
	public ResponseEntity<?> addEmployee(@RequestBody Employee employee){
		Employee newEmp = service.addEmp(employee);
		return new ResponseEntity<>(newEmp,HttpStatus.CREATED);
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<?> updateEmployee(@RequestBody Employee employee){
		Employee newEmp = service.updateEmp(employee);
		return new ResponseEntity<>(newEmp,HttpStatus.OK);
	}
	

	@GetMapping("/getUser/{empId}")
	public ResponseEntity<?> getEmployee(@PathVariable(value = "empId") long id){
		Employee newEmp = service.getEmpById(id);
		return new ResponseEntity<>(newEmp,HttpStatus.OK);
	}
	
	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAllEmployee(){
		List<Employee> list = service.getAllEmp();
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable long id){
		service.deleteEmployee(id);
		return new ResponseEntity<>("Successfully Deleted Employee",HttpStatus.OK);
	}
	
	
	
}
