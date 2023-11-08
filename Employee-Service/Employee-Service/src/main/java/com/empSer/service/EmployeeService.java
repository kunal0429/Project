package com.empSer.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.empSer.entity.Employee;

@Service
public interface EmployeeService {

	Employee addEmp(Employee employee);
	Employee getEmpById(long id);
	List<Employee> getAllEmp();
	String deleteEmployee(long id);
}
