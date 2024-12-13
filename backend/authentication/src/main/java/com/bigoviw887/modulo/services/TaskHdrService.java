package com.bigoviw887.modulo.services;

import com.bigoviw887.modulo.dto.TaskHdrDto;
import com.bigoviw887.modulo.exceptions.NotFoundException;
import com.bigoviw887.modulo.mapper.TaskHdrReadMapper;
import com.bigoviw887.modulo.mapper.TaskHdrWriteMapper;
import com.bigoviw887.modulo.model.TaskHdr;
import com.bigoviw887.modulo.repos.TaskHdrRepository;
import java.util.List;
import javax.annotation.processing.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class TaskHdrService {

  private final TaskHdrRepository taskHdrRepository;

  private final TaskHdrWriteMapper taskHdrWriteMapper;

  private final TaskHdrReadMapper taskHdrReadMapper;

  /** createTaskHdr function */
  public TaskHdrDto createTaskHdr(TaskHdrDto taskHdr) {
    TaskHdrDto taskHdrOut = null;
    TaskHdr taskHdrEntity = taskHdrWriteMapper.dtoToEntity(taskHdr);
    TaskHdr taskHdrSaved = taskHdrRepository.save(taskHdrEntity);
    taskHdrOut = taskHdrWriteMapper.entityToDto(taskHdrSaved);
    return taskHdrOut;
  }

  /** deleteTaskHdr function */
  public void deleteTaskHdr(Long id) {
    TaskHdr taskHdrEntity =
        taskHdrRepository.findById(id).orElseThrow(() -> new NotFoundException());
    taskHdrRepository.delete(taskHdrEntity);
  }

  /** readTaskHdr function */
  public TaskHdrDto readTaskHdr(Long id) {
    TaskHdrDto taskHdrOut = null;
    TaskHdr taskHdrEntity =
        taskHdrRepository.findById(id).orElseThrow(() -> new NotFoundException());
    taskHdrOut = taskHdrReadMapper.entityToDto(taskHdrEntity);
    return taskHdrOut;
  }

  /** readTaskHdrList function */
  public List<TaskHdrDto> readTaskHdrList() {
    List<TaskHdrDto> taskHdrListOut = null;
    List<TaskHdr> taskHdrEntity = taskHdrRepository.findAll();
    taskHdrListOut = taskHdrReadMapper.entityToDto(taskHdrEntity);
    return taskHdrListOut;
  }

  /** updateTaskHdr function */
  public TaskHdrDto updateTaskHdr(TaskHdrDto taskHdr) {
    TaskHdrDto taskHdrOut = null;
    TaskHdr taskHdrEntity =
        taskHdrRepository.findById(taskHdr.getId()).orElseThrow(() -> new NotFoundException());
    taskHdrWriteMapper.updateFromDto(taskHdrEntity, taskHdr);
    TaskHdr taskHdrSaved = taskHdrRepository.save(taskHdrEntity);
    taskHdrOut = taskHdrWriteMapper.entityToDto(taskHdrSaved);
    return taskHdrOut;
  }
}