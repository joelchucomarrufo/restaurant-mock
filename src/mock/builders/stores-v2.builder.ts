import { StoresResponseDto, TiendaDto } from '../dto/stores.dto';
import { StoresUnitResponseDto, StoreResponseDto, ImageVideoDto } from '../dto/stores-v2.dto';

/**
 * Mapea los valores de benefit a los nombres esperados
 */
function mapBenefit(benefit: string[]): string[] {
  const benefitMap: Record<string, string> = {
    bonus: 'Bonus',
    prime: 'Prime',
    colaborador: 'Colaborador',
    cupones: 'Cupones',
  };
  return benefit.map((b) => benefitMap[b.toLowerCase()] || b);
}

/**
 * Mapea los valores de callCustomer a los nombres esperados
 */
function mapCallCustomer(callCustomer: string[]): string[] {
  const callCustomerMap: Record<string, string> = {
    discollamadorautomatico: 'DiscoAutomatico',
    discollamadormanual: 'DiscoManual',
    telefonosms: 'SMSTelefono',
  };
  return callCustomer.map((c) => {
    const key = c.toLowerCase();
    return callCustomerMap[key] || c;
  });
}

/**
 * Mapea una tienda del formato V1 al formato V2
 */
function mapStore(tienda: TiendaDto): StoreResponseDto {
  // Determinar el tipo de imagen/video basado en el id
  const getImageType = (id: string): string => {
    if (id.includes('video') || id.includes('Video')) {
      return 'video';
    }
    return 'image';
  };

  // Generar nombre basado en el id
  const getImageName = (id: string): string => {
    const nameMap: Record<string, string> = {
      cabecera: 'cabecera.jpeg',
      principal: 'principal.jpeg',
      opcional: 'opcional.jpeg',
      inactividad: 'inactividad.jpeg',
    };
    return nameMap[id.toLowerCase()] || `${id}.jpeg`;
  };

  return {
    code: tienda.store,
    name: tienda.name,
    ipEpos: tienda.ipEpos,
    numberEpos: tienda.numberEpos ? String(tienda.numberEpos) : null,
    address: tienda.address ?? null,
    couponsInput: tienda.couponsInput,
    benefit: mapBenefit(tienda.benefit),
    callCustomer: mapCallCustomer(tienda.callCustomer),
    device: tienda.device,
    imagesVideos: tienda.imagesVideos.map(
      (iv): ImageVideoDto => ({
        id: iv.id,
        type: getImageType(iv.id),
        name: getImageName(iv.id),
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
