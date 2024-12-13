package com.bigoviw887.modulo.mapper;

import com.bigoviw887.modulo.dto.AccountDto;
import com.bigoviw887.modulo.schema.AccountSchema;
import java.util.List;
import javax.annotation.processing.Generated;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Component
@Mapper(uses = {UserObjMapper.class})
public interface AccountMapper {

  AccountSchema dtoToSchema(AccountDto dto);

  List<AccountSchema> dtoToSchema(List<AccountDto> dtoList);

  AccountDto schemaToDto(AccountSchema schema);

  List<AccountDto> schemaToDto(List<AccountSchema> schemaList);
}
