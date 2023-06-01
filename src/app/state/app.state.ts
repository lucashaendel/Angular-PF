import { ActionReducerMap } from "@ngrx/store";
import { CursoState } from "../core/modelos/curso.state";
import { cursosReducer } from "./cursos/cursos.reducer";

export interface AppState {
    cursos: CursoState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    cursos: cursosReducer
}