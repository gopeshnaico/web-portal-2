import { Dispatch, FC, SetStateAction } from 'react';
import { GeoRestriction } from '../../ui/MyBrands/GeoRestriction';

interface GeoRestrictionPageProps {
  setAddGeoFlag: Dispatch<SetStateAction<boolean>>;
}

export const GeoRestrictionPage: FC<GeoRestrictionPageProps> = ({
  setAddGeoFlag,
}) => {
  return (
    <GeoRestriction
      {...{
        setAddGeoFlag,
      }}
    />
  );
};
