import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { SubjectListComponent } from './screens/subject-list/subject-list.component';
// YC1: tạo đường dẫn mon-hoc
// xử lý ở trong component SubjectList
// YC2: tạo đường dẫn quiz/:idmonhoc
// xử lý ở trong component Quiz
// hiển thị id của môn học ra màn hình
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    // children: [],
    // loadChildren
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'mon-hoc',
    component: SubjectListComponent
  }, 
  {
    path: 'quiz/:idmonhoc',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
