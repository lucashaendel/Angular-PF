import { Action, createReducer, on } from '@ngrx/store';
import { Curso } from 'src/app/core/modelos/curso';
import { CursoState } from 'src/app/core/modelos/curso.state';
import { addCurso, loadCursos, loadedCursos,deleteCurso, updateCurso } from './cursos.actions';

export const initialState: CursoState = { loading: false, cursos: [] }

export const cursosReducer = createReducer(
    initialState,
  
    on(loadCursos, (state) => {
      return {...state, loading: true}
    }),
    
    on(loadedCursos, (state, {cursos}) => {
      return {...state, loading: false, cursos}
    }),

    on(addCurso, (state, {curso}) => {
      return {...state, loading: false, curso}
    }),

    on(deleteCurso, (state, {curso}) => {
      return {...state, loading: false, curso}
    }),

    on(updateCurso, (state, {curso}) => {
      return {...state, loading: false, curso}
    }),
);

/*
import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/product';
import * as ProductFeatureActions from './product-feature.actions';

export const productFeatureFeatureKey = 'productFeature';

export interface State {
  products: Product[];
  loading:boolean,
  productDetailed:any
}

export const initialState: State = {
  products:[],
  loading:true,
  productDetailed:{}
};

export const reducer = createReducer(
  initialState,

  on(ProductFeatureActions.loadProductFeatures, (state) => {
    return {...state}
  }),
  on(ProductFeatureActions.loadProductFeaturesSuccess, (state, {products}) =>{
    return {...state, products, loading:false}
  }),
  on(ProductFeatureActions.loadProductFeaturesFailure, (state, action) => state),

  on(ProductFeatureActions.loadElementByIdFeaturesSucces, (state,{productDetailed})=>{
    return {...state,productDetailed}
  })

);
*/