import { StoresResponseDto, TiendaDto } from '../dto/stores.dto';
import { StoresUnitResponseDto, StoreResponseDto, ImageVideoDto } from '../dto/stores-v2.dto';

/**
 * Mapea una tienda del formato V1 al formato V2
 */
function mapStore(tienda: TiendaDto): StoreResponseDto {
  return {
    code: tienda.store,
    name: tienda.name,
    ipEpos: tienda.ipEpos,
    numberEpos: String(tienda.numberEpos),
    address: tienda.address ?? null,
    couponsInput: tienda.couponsInput,
    benefit: tienda.benefit,
    callCustomer: tienda.callCustomer,
    device: tienda.device,
    imagesVideos: tienda.imagesVideos.map(
      (iv): ImageVideoDto => ({
        type: iv.id,
        url: iv.url,
      }),
    ),
  };
}

/**
 * Adapta la respuesta de stores del formato V1 al formato V2
 * Reutiliza el mock existente sin modificarlo
 */
export function adaptStoresResponseV2(
  storesMockData: StoresResponseDto,
): StoresUnitResponseDto[] {
  return [
    {
      id: 'wong',
      flag: 'wong',
      stores: storesMockData.wong.map(mapStore),
    },
    {
      id: 'metro',
      flag: 'metro',
      stores: storesMockData.metro.map(mapStore),
    },
  ];
}
