package com.bigoviw887.modulo.controllers;

import com.bigoviw887.modulo.dto.AssetsObjDto;
import com.bigoviw887.modulo.mapper.AssetsObjMapper;
import com.bigoviw887.modulo.mapper.FileMapper;
import com.bigoviw887.modulo.schema.AssetsObjSchema;
import com.bigoviw887.modulo.services.Assets;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import java.io.IOException;
import javax.annotation.processing.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/** assets controller */
@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@RestController
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class Assets {

  private final Assets assets;

  private final FileMapper fileMapper;

  private final AssetsObjMapper assetsObjMapper;

  @GetMapping(path = "/assets/{id}")
  @Operation(
      responses = {
        @ApiResponse(responseCode = "400", description = "id did not found"),
        @ApiResponse(
            responseCode = "200",
            description = "Asset found",
            content = @Content(schema = @Schema(implementation = AssetsObjSchema.class)))
      })
  protected ResponseEntity<byte[]> assets(@PathVariable Long id) {

    AssetsObjDto objDto = assetsService.readAsset(id);
    AssetsObjSchema assetsObjSchema = assetsObjMapper.dtoToSchema(objDto);

    // setting headers
    HttpHeaders headers = new HttpHeaders();
    ContentDisposition contentDisposition = ContentDisposition.builder("inline").build();
    headers.setContentDisposition(contentDisposition);

    return ResponseEntity.ok()
        .contentLength(assetsObjSchema.getSize())
        .contentType(MediaType.parseMediaType(assetsObjSchema.getMimetype()))
        .headers(headers) // mimetype from meta data
        .body(assetsObjSchema.getBlob());
  }

  @DeleteMapping(path = "/assets/{id}")
  @Operation(
      responses = {
        @ApiResponse(
            responseCode = "200",
            description = "Asset deleted",
            content = @Content(schema = @Schema(implementation = AssetsObjSchema.class))),
        @ApiResponse(responseCode = "400", description = "id did not found")
      })
  protected ResponseEntity<AssetsObjSchema> deleteAssets(@PathVariable Long id) {

    AssetsObjDto assetsObjDto = assetsService.deleteAsset(id);
    AssetsObjSchema assetsObjSchema = assetsObjMapper.dtoToSchema(assetsObjDto);
    return new ResponseEntity<AssetsObjSchema>(assetsObjSchema, HttpStatus.OK);
  }

  @PostMapping(path = "/assets")
  @Operation(
      responses = {
        @ApiResponse(responseCode = "400", description = "It can not be uploaded"),
        @ApiResponse(
            responseCode = "200",
            description = "Asset uploaded",
            content = @Content(schema = @Schema(implementation = AssetsObjSchema.class)))
      })
  protected ResponseEntity<AssetsObjSchema> uploadAssets(@RequestParam("file") MultipartFile file)
      throws IOException {

    AssetsObjDto assetsObjDto = fileMapper.fileToDto(file);
    AssetsObjDto assetsObjdtosaved = null;
    try {
      assetsObjdtosaved = assetsService.uploadAsset(file.getBytes(), assetsObjDto);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
    AssetsObjSchema assetsObjSchema = assetsObjMapper.dtoToSchema(assetsObjdtosaved);
    return new ResponseEntity<AssetsObjSchema>(assetsObjSchema, HttpStatus.OK);
  }
}