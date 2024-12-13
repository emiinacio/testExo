package com.bigoviw887.modulo.mapper;

import com.bigoviw887.modulo.dto.AssetsObjDto;
import java.io.IOException;
import java.io.InputStream;
import java.security.DigestInputStream;
import java.security.MessageDigest;
import javax.annotation.processing.Generated;
import lombok.SneakyThrows;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.web.multipart.MultipartFile;

/** Class to deal with file, used only into Assets sub module */
@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Mapper
public interface FileMapper {
  @Mapping(target = "name", source = "originalFilename")
  @Mapping(target = "size", source = "size")
  @Mapping(target = "mimetype", source = "contentType")
  @Mapping(target = "checksum", source = "inputStream")
  @Mapping(target = "extension", source = "name")
  @Mapping(target = "blob", source = "bytes", ignore = true)
  public AssetsObjDto fileToDto(MultipartFile file) throws IOException;

  @SneakyThrows
  public default String createCheckSum(InputStream is) {
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    try (DigestInputStream dis = new DigestInputStream(is, md)) {
      while (dis.read() != -1) {
        md = dis.getMessageDigest();
      }
    }
    StringBuilder resultFromHex = new StringBuilder();
    for (byte b : md.digest()) {
      resultFromHex.append(String.format("%02x", b));
    }
    return resultFromHex.toString();
  }
}