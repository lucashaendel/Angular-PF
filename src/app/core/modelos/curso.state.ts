import { Curso } from "./curso";

export interface CursoState {
    cursos:ReadonlyArray<Curso>,
    loading:boolean,
}