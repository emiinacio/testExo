package com.bigoviw887.modulo.mapper;

import com.bigoviw887.modulo.dto.AssetsObjDto;
import com.bigoviw887.modulo.model.Assets;
import java.util.List;
import javax.annotation.processing.Generated;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Component
@Mapper
public abstract class AssetsObjReadMapper extends EntityMapper {

  public abstract AssetsObjDto entityToDto(Assets entity);

  public abstract List<AssetsObjDto> entityToDto(List<Assets> entityList);
}
