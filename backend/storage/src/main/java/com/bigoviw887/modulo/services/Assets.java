package com.bigoviw887.modulo.services;

import com.bigoviw887.modulo.dto.AssetsObjDto;
import com.bigoviw887.modulo.exceptions.NotFoundException;
import com.bigoviw887.modulo.mapper.AssetsObjMapper;
import com.bigoviw887.modulo.model.Assets;
import com.bigoviw887.modulo.repos.AssetsRepository;
import com.bigoviw887.modulo.util.ManageFileFS;
import javax.annotation.processing.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/** Assets */
@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class Assets {

  private final AssetsRepository assetsRepository;

  private final ManageFileFS manageFileFS;

  private final AssetsObjMapper assetsObjMapper;

  /** delete an asset */
  public void deleteAsset(Long assetId) {
    AssetsObjDto objDeleted = null;
    Assets assetsEntity =
        assetsRepository.findById(assetId).orElseThrow(() -> new NotFoundException());
    assetsRepository.delete(assetsEntity);
    manageFileFS.delete(assetsEntity.getChecksum());
    uploadAsset(objDeleted, assetId);
  }

  /** Read an asset */
  public void readAsset(Long assetId) {
    AssetsObjDto readObj = null;
    Assets assetsEntity =
        assetsRepository.findById(assetId).orElseThrow(() -> new NotFoundException());
    return readObj;
  }

  /** Upload asset */
  public void uploadAsset(byte[] byteArray, AssetsObjDto AssetsObj) {
    AssetsObjDto readObj = null;
    Assets assetsEntity = assetsObjMapper.dtoToEntity(AssetsObj);
    manageFileFS.write(AssetsObj.getChecksum(), byteArray);
    Assets assetsSaved = assetsRepository.save(assetsEntity);
    return readObj;
  }
}
