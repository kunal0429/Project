package com.empSer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empSer.entity.Employee;
import com.empSer.exception.NotFoundException;
import com.empSer.repo.EmployeeRepo;


@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	
	@Autowired
	private EmployeeRepo empRepo;

	@Override
	public Employee addEmp(Employee employee) {
		Employee emp = empRepo.save(employee);
		return emp;
	}

	@Override
	public Employee getEmpById(long id) {
		Employee emp = empRepo.findById(id).orElseThrow(()->new NotFoundException("No employee with this id"));
		return emp;
	}

	@Override
	public List<Employee> getAllEmp() {
		return empRepo.findAll();
	}

	@Override
	public String deleteEmployee(long id) {
		empRepo.findById(id).orElseThrow(()->new NotFoundException("No employee with this id"));
	    empRepo.deleteById(id);
	    return "Successfull Deleted Employee";
	}
	
	public Employee updateEmp(Employee employee) {
		Employee emp = empRepo.findById(employee.getId()).orElseThrow(()->new NotFoundException("No employee with this id"));
		
		emp.setKeyCollected(!emp.isKeyCollected());
        return empRepo.save(emp);
	}
	
	 

}
