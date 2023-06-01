import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/core/modelos/curso';

export const loadCursos = createAction(
    '[Cursos List] Load Cursos',
);

export const loadedCursos = createAction(
    '[Cursos List] Loaded success',
    props<{ cursos: Curso[] }>()
);

export const addCurso = createAction(
  '[Curso] Add curso',
  (curso: Curso) => ({ curso })
 
);
export const addCursoSuccess = createAction(
  '[Curso] Add curso success',
  
  (curso: Curso) => ({ curso })
);

export const deleteCurso = createAction(
  '[Curso] Delete curso',
  (curso: Curso) => ({ curso })
);

export const deleteCursoSuccess = createAction(
  '[Curso] Delete curso success',
  (curso: Curso) => ({ curso })
);

export const updateCurso = createAction(
  '[Curso] Update curso',
  (curso: Curso) => ({ curso })
);

export const updateCursoSuccess = createAction(
  '[Curso] Update curso success',
  (curso: Curso) => ({ curso })
);

/*
export const loadProductFeatures = createAction(
  '[ProductFeature] Load ProductFeatures'
);

export const loadProductFeaturesSuccess = createAction(
  '[ProductFeature] Load ProductFeatures Success',
  props<{ products: Product[] }>()
);

export const loadProductFeaturesFailure = createAction(
  '[ProductFeature] Load ProductFeatures Failure',
  props<{ error: any }>()
);

export const postProductFeatures=createAction(
  '[ProductFeature] post product',
  props<{product:Product}>()
)

export const deleteProductFeatures=createAction(
  '[ProductFeature] delete product',
  props<{id:string}>()
)

export const loadElementByIdFeatures=createAction(
  '[ProductFeature] load element by id feature',
  props<{id:string}>()
)

export const loadElementByIdFeaturesSucces=createAction(
  '[ProductFeature] load element by id success',
  props<{productDetailed:Product}>()
  )
*/