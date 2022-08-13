import { ProductionPrintComponent } from './componenents/admin/assessment/print/production-print/production-print.component';
import { ExtensionPrintComponent } from './componenents/admin/assessment/print/extension-print/extension-print.component';
import { ResearchPrintComponent } from './componenents/admin/assessment/print/research-print/research-print.component';
import { InstructionPrintComponent } from './componenents/admin/assessment/print/instruction-print/instruction-print.component';
import { LeadershipPrintComponent } from './componenents/admin/assessment/print/leadership-print/leadership-print.component';
import { CorePrintComponent } from './componenents/admin/assessment/print/core-print/core-print.component';
import { UserViewInstructionComponent } from './componenents/user/assessment/view/user-view-instruction/user-view-instruction.component';
import { AdminViewInstructionComponent } from './componenents/admin/assessment/view/admin-view-instruction/admin-view-instruction.component';
import { AdminViewLeadershipComponent } from './componenents/admin/assessment/view/admin-view-leadership/admin-view-leadership.component';
import { UserViewLeadershipComponent } from './componenents/user/assessment/view/user-view-leadership/user-view-leadership.component';
import { AdminViewCoreComponent } from './componenents/admin/assessment/view/admin-view-core/admin-view-core.component';
import { AdminAssessmentListComponent } from './componenents/admin/assessment/admin-assessment-list/admin-assessment-list.component';
import { UserViewCoreComponent } from './componenents/user/assessment/view/user-view-core/user-view-core.component';
import { UserAssessmentListComponent } from './componenents/user/assessment/user-assessment-list/user-assessment-list.component';
import { InstructionSevenBComponent } from './componenents/user/instruction competency/instruction-seven-b/instruction-seven-b.component';
import { InstructionSevenAComponent } from './componenents/user/instruction competency/instruction-seven-a/instruction-seven-a.component';
import { InstructionSixBComponent } from './componenents/user/instruction competency/instruction-six-b/instruction-six-b.component';
import { InstructionSixAComponent } from './componenents/user/instruction competency/instruction-six-a/instruction-six-a.component';
import { InstructionFiveBComponent } from './componenents/user/instruction competency/instruction-five-b/instruction-five-b.component';
import { InstructionFiveAComponent } from './componenents/user/instruction competency/instruction-five-a/instruction-five-a.component';
import { InstructionFourBComponent } from './componenents/user/instruction competency/instruction-four-b/instruction-four-b.component';
import { InstructionFourAComponent } from './componenents/user/instruction competency/instruction-four-a/instruction-four-a.component';
import { InstructionThreeBComponent } from './componenents/user/instruction competency/instruction-three-b/instruction-three-b.component';
import { InstructionThreeAComponent } from './componenents/user/instruction competency/instruction-three-a/instruction-three-a.component';
import { InstructionTwoBComponent } from './componenents/user/instruction competency/instruction-two-b/instruction-two-b.component';
import { InstructionTwoAComponent } from './componenents/user/instruction competency/instruction-two-a/instruction-two-a.component';
import { InstructionOneBComponent } from './componenents/user/instruction competency/instruction-one-b/instruction-one-b.component';
import { InstructionOneAComponent } from './componenents/user/instruction competency/instruction-one-a/instruction-one-a.component';
import { LeadershipFiveBComponent } from './componenents/user/leadership competency/leadership-five-b/leadership-five-b.component';
import { LeadershipFiveAComponent } from './componenents/user/leadership competency/leadership-five-a/leadership-five-a.component';
import { LeadershipFourBComponent } from './componenents/user/leadership competency/leadership-four-b/leadership-four-b.component';
import { LeadershipFourAComponent } from './componenents/user/leadership competency/leadership-four-a/leadership-four-a.component';
import { LeadershipThreeBComponent } from './componenents/user/leadership competency/leadership-three-b/leadership-three-b.component';
import { LeadershipThreeAComponent } from './componenents/user/leadership competency/leadership-three-a/leadership-three-a.component';
import { LeadershipTwoBComponent } from './componenents/user/leadership competency/leadership-two-b/leadership-two-b.component';
import { LeadershipTwoAComponent } from './componenents/user/leadership competency/leadership-two-a/leadership-two-a.component';
import { LeadershipOneBComponent } from './componenents/user/leadership competency/leadership-one-b/leadership-one-b.component';
import { LeadershipOneAComponent } from './componenents/user/leadership competency/leadership-one-a/leadership-one-a.component';
import { CoreThreeBComponent } from './componenents/user/core competency/core-three-b/core-three-b.component';
import { CoreThreeAComponent } from './componenents/user/core competency/core-three-a/core-three-a.component';
import { CoreTwoBComponent } from './componenents/user/core competency/core-two-b/core-two-b.component';
import { CoreTwoAComponent } from './componenents/user/core competency/core-two-a/core-two-a.component';
import { CoreOneBComponent } from './componenents/user/core competency/core-one-b/core-one-b.component';
import { AssessmentInstructionComponent } from './componenents/user/assessment/assessment-instruction/assessment-instruction.component';
import { UpdateRankComponent } from './componenents/admin/rank/update-rank/update-rank.component';
import { CreateRankComponent } from './componenents/admin/rank/create-rank/create-rank.component';
import { RankListComponent } from './componenents/admin/rank/rank-list/rank-list.component';
import { UpdateDepartmentComponent } from './componenents/admin/department/update-department/update-department.component';
import { CreateDepartmentComponent } from './componenents/admin/department/create-department/create-department.component';
import { DepartmentListComponent } from './componenents/admin/department/department-list/department-list.component';
import { UpdateUserComponent } from './componenents/admin/user/update-user/update-user.component';
import { CreateUserComponent } from './componenents/admin/user/create-user/create-user.component';
import { FeedbackListComponent } from './componenents/admin/feedback/feedback-list/feedback-list.component';
import { UserListComponent } from './componenents/admin/user/user-list/user-list.component';
import { HomeComponent } from './componenents/user/home/home.component';
import { AboutComponent } from './componenents/shared/about/about.component';
import { ContactComponent } from './componenents/shared/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './componenents/auth/forgot/forgot.component';
import { LoginComponent } from './componenents/auth/login/login.component';
import { RegisterComponent } from './componenents/auth/register/register.component';
import { ResetComponent } from './componenents/auth/reset/reset.component';
import { UserGuard } from './guards/user.guard';
import { DashboardComponent } from './componenents/admin/dashboard/dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { CoreOneAComponent } from './componenents/user/core competency/core-one-a/core-one-a.component';
import { ResearchOneAComponent } from './componenents/user/research competency/research-one-a/research-one-a.component';
import { ResearchOneBComponent } from './componenents/user/research competency/research-one-b/research-one-b.component';
import { ResearchTwoAComponent } from './componenents/user/research competency/research-two-a/research-two-a.component';
import { ResearchTwoBComponent } from './componenents/user/research competency/research-two-b/research-two-b.component';
import { ResearchThreeAComponent } from './componenents/user/research competency/research-three-a/research-three-a.component';
import { ResearchThreeBComponent } from './componenents/user/research competency/research-three-b/research-three-b.component';
import { ResearchFiveAComponent } from './componenents/user/research competency/research-five-a/research-five-a.component';
import { ResearchFiveBComponent } from './componenents/user/research competency/research-five-b/research-five-b.component';
import { ResearchFourAComponent } from './componenents/user/research competency/research-four-a/research-four-a.component';
import { ResearchFourBComponent } from './componenents/user/research competency/research-four-b/research-four-b.component';
import { ResearchSixAComponent } from './componenents/user/research competency/research-six-a/research-six-a.component';
import { ResearchSixBComponent } from './componenents/user/research competency/research-six-b/research-six-b.component';
import { ExtensionOneAComponent } from './componenents/user/extension competency/extension-one-a/extension-one-a.component';
import { ExtensionOneBComponent } from './componenents/user/extension competency/extension-one-b/extension-one-b.component';
import { ExtensionTwoAComponent } from './componenents/user/extension competency/extension-two-a/extension-two-a.component';
import { ExtensionTwoBComponent } from './componenents/user/extension competency/extension-two-b/extension-two-b.component';
import { ExtensionThreeAComponent } from './componenents/user/extension competency/extension-three-a/extension-three-a.component';
import { ExtensionThreeBComponent } from './componenents/user/extension competency/extension-three-b/extension-three-b.component';
import { ExtensionFiveAComponent } from './componenents/user/extension competency/extension-five-a/extension-five-a.component';
import { ExtensionFiveBComponent } from './componenents/user/extension competency/extension-five-b/extension-five-b.component';
import { ExtensionFourAComponent } from './componenents/user/extension competency/extension-four-a/extension-four-a.component';
import { ExtensionFourBComponent } from './componenents/user/extension competency/extension-four-b/extension-four-b.component';
import { ExtensionSixAComponent } from './componenents/user/extension competency/extension-six-a/extension-six-a.component';
import { ExtensionSixBComponent } from './componenents/user/extension competency/extension-six-b/extension-six-b.component';
import { ProductionOneAComponent } from './componenents/user/production competency/production-one-a/production-one-a.component';
import { ProductionOneBComponent } from './componenents/user/production competency/production-one-b/production-one-b.component';
import { ProductionTwoAComponent } from './componenents/user/production competency/production-two-a/production-two-a.component';
import { ProductionTwoBComponent } from './componenents/user/production competency/production-two-b/production-two-b.component';
import { ProductionThreeAComponent } from './componenents/user/production competency/production-three-a/production-three-a.component';
import { ProductionThreeBComponent } from './componenents/user/production competency/production-three-b/production-three-b.component';
import { ProductionFourAComponent } from './componenents/user/production competency/production-four-a/production-four-a.component';
import { ProductionFourBComponent } from './componenents/user/production competency/production-four-b/production-four-b.component';
import { UserViewResearchComponent } from './componenents/user/assessment/view/user-view-research/user-view-research.component';
import { UserViewExtensionComponent } from './componenents/user/assessment/view/user-view-extension/user-view-extension.component';
import { UserViewProductionComponent } from './componenents/user/assessment/view/user-view-production/user-view-production.component';
import { AdminViewResearchComponent } from './componenents/admin/assessment/view/admin-view-research/admin-view-research.component';
import { AdminViewExtensionComponent } from './componenents/admin/assessment/view/admin-view-extension/admin-view-extension.component';
import { AdminViewProductionComponent } from './componenents/admin/assessment/view/admin-view-production/admin-view-production.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  //authentication and shared routes
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},

  //user routes
  {path: 'home', component: HomeComponent, canActivate: [UserGuard]},
  {path: 'assessment-instruction', component: AssessmentInstructionComponent, canActivate: [UserGuard]},
  {path: 'user-assessment-list', component: UserAssessmentListComponent, canActivate: [UserGuard]},

  {path: 'core-one-a', component: CoreOneAComponent, canActivate: [UserGuard]},
  {path: 'core-one-b', component: CoreOneBComponent, canActivate: [UserGuard]},
  {path: 'core-two-a', component: CoreTwoAComponent, canActivate: [UserGuard]},
  {path: 'core-two-b', component: CoreTwoBComponent, canActivate: [UserGuard]},
  {path: 'core-three-a', component: CoreThreeAComponent, canActivate: [UserGuard]},
  {path: 'core-three-b', component: CoreThreeBComponent, canActivate: [UserGuard]},

  {path: 'leadership-one-a', component: LeadershipOneAComponent, canActivate: [UserGuard]},
  {path: 'leadership-one-b', component: LeadershipOneBComponent, canActivate: [UserGuard]},
  {path: 'leadership-two-a', component: LeadershipTwoAComponent, canActivate: [UserGuard]},
  {path: 'leadership-two-b', component: LeadershipTwoBComponent, canActivate: [UserGuard]},
  {path: 'leadership-three-a', component: LeadershipThreeAComponent, canActivate: [UserGuard]},
  {path: 'leadership-three-b', component: LeadershipThreeBComponent, canActivate: [UserGuard]},
  {path: 'leadership-four-a', component: LeadershipFourAComponent, canActivate: [UserGuard]},
  {path: 'leadership-four-b', component: LeadershipFourBComponent, canActivate: [UserGuard]},
  {path: 'leadership-five-a', component: LeadershipFiveAComponent, canActivate: [UserGuard]},
  {path: 'leadership-five-b', component: LeadershipFiveBComponent, canActivate: [UserGuard]},

  {path: 'instruction-one-a', component: InstructionOneAComponent, canActivate: [UserGuard]},
  {path: 'instruction-one-b', component: InstructionOneBComponent, canActivate: [UserGuard]},
  {path: 'instruction-two-a', component: InstructionTwoAComponent, canActivate: [UserGuard]},
  {path: 'instruction-two-b', component: InstructionTwoBComponent, canActivate: [UserGuard]},
  {path: 'instruction-three-a', component: InstructionThreeAComponent, canActivate: [UserGuard]},
  {path: 'instruction-three-b', component: InstructionThreeBComponent, canActivate: [UserGuard]},
  {path: 'instruction-four-a', component: InstructionFourAComponent, canActivate: [UserGuard]},
  {path: 'instruction-four-b', component: InstructionFourBComponent, canActivate: [UserGuard]},
  {path: 'instruction-five-a', component: InstructionFiveAComponent, canActivate: [UserGuard]},
  {path: 'instruction-five-b', component: InstructionFiveBComponent, canActivate: [UserGuard]},
  {path: 'instruction-six-a', component: InstructionSixAComponent, canActivate: [UserGuard]},
  {path: 'instruction-six-b', component: InstructionSixBComponent, canActivate: [UserGuard]},
  {path: 'instruction-seven-a', component: InstructionSevenAComponent, canActivate: [UserGuard]},
  {path: 'instruction-seven-b', component: InstructionSevenBComponent, canActivate: [UserGuard]},

  {path: 'research-one-a', component: ResearchOneAComponent, canActivate: [UserGuard]},
  {path: 'research-one-b', component: ResearchOneBComponent, canActivate: [UserGuard]},
  {path: 'research-two-a', component: ResearchTwoAComponent, canActivate: [UserGuard]},
  {path: 'research-two-b', component: ResearchTwoBComponent, canActivate: [UserGuard]},
  {path: 'research-three-a', component: ResearchThreeAComponent, canActivate: [UserGuard]},
  {path: 'research-three-b', component: ResearchThreeBComponent, canActivate: [UserGuard]},
  {path: 'research-four-a', component: ResearchFourAComponent, canActivate: [UserGuard]},
  {path: 'research-four-b', component: ResearchFourBComponent, canActivate: [UserGuard]},
  {path: 'research-five-a', component: ResearchFiveAComponent, canActivate: [UserGuard]},
  {path: 'research-five-b', component: ResearchFiveBComponent, canActivate: [UserGuard]},
  {path: 'research-six-a', component: ResearchSixAComponent, canActivate: [UserGuard]},
  {path: 'research-six-b', component: ResearchSixBComponent, canActivate: [UserGuard]},

  {path: 'extension-one-a', component: ExtensionOneAComponent, canActivate: [UserGuard]},
  {path: 'extension-one-b', component: ExtensionOneBComponent, canActivate: [UserGuard]},
  {path: 'extension-two-a', component: ExtensionTwoAComponent, canActivate: [UserGuard]},
  {path: 'extension-two-b', component: ExtensionTwoBComponent, canActivate: [UserGuard]},
  {path: 'extension-three-a', component: ExtensionThreeAComponent, canActivate: [UserGuard]},
  {path: 'extension-three-b', component: ExtensionThreeBComponent, canActivate: [UserGuard]},
  {path: 'extension-four-a', component: ExtensionFourAComponent, canActivate: [UserGuard]},
  {path: 'extension-four-b', component: ExtensionFourBComponent, canActivate: [UserGuard]},
  {path: 'extension-five-a', component: ExtensionFiveAComponent, canActivate: [UserGuard]},
  {path: 'extension-five-b', component: ExtensionFiveBComponent, canActivate: [UserGuard]},
  {path: 'extension-six-a', component: ExtensionSixAComponent, canActivate: [UserGuard]},
  {path: 'extension-six-b', component: ExtensionSixBComponent, canActivate: [UserGuard]},

  {path: 'production-one-a', component: ProductionOneAComponent, canActivate: [UserGuard]},
  {path: 'production-one-b', component: ProductionOneBComponent, canActivate: [UserGuard]},
  {path: 'production-two-a', component: ProductionTwoAComponent, canActivate: [UserGuard]},
  {path: 'production-two-b', component: ProductionTwoBComponent, canActivate: [UserGuard]},
  {path: 'production-three-a', component: ProductionThreeAComponent, canActivate: [UserGuard]},
  {path: 'production-three-b', component: ProductionThreeBComponent, canActivate: [UserGuard]},
  {path: 'production-four-a', component: ProductionFourAComponent, canActivate: [UserGuard]},
  {path: 'production-four-b', component: ProductionFourBComponent, canActivate: [UserGuard]},

  {path: 'user-view-core', component: UserViewCoreComponent, canActivate: [UserGuard]},
  {path: 'user-view-leadership', component: UserViewLeadershipComponent, canActivate: [UserGuard]},
  {path: 'user-view-instruction', component: UserViewInstructionComponent, canActivate: [UserGuard]},
  {path: 'user-view-research', component: UserViewResearchComponent, canActivate: [UserGuard]},
  {path: 'user-view-extension', component: UserViewExtensionComponent, canActivate: [UserGuard]},
  {path: 'user-view-production', component: UserViewProductionComponent, canActivate: [UserGuard]},

  //admin routes
  {path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},

  {path: 'user-list', component: UserListComponent, canActivate: [AdminGuard]},
  {path: 'create-user', component: CreateUserComponent, canActivate: [AdminGuard]},
  {path: 'update-user', component: UpdateUserComponent, canActivate: [AdminGuard]},

  {path: 'admin-assessment-list', component: AdminAssessmentListComponent, canActivate: [AdminGuard]},

  {path: 'department-list', component: DepartmentListComponent, canActivate: [AdminGuard]},
  {path: 'create-department', component: CreateDepartmentComponent, canActivate: [AdminGuard]},
  {path: 'update-department', component: UpdateDepartmentComponent, canActivate: [AdminGuard]},

  {path: 'rank-list', component: RankListComponent, canActivate: [AdminGuard]},
  {path: 'create-rank', component: CreateRankComponent, canActivate: [AdminGuard]},
  {path: 'update-rank', component: UpdateRankComponent, canActivate: [AdminGuard]},
  
  {path: 'feedback-list', component: FeedbackListComponent, canActivate: [AdminGuard]},

  {path: 'admin-view-core', component: AdminViewCoreComponent, canActivate: [AdminGuard]},
  {path: 'admin-view-leadership', component: AdminViewLeadershipComponent, canActivate: [AdminGuard]},
  {path: 'admin-view-instruction', component: AdminViewInstructionComponent, canActivate: [AdminGuard]},
  {path: 'admin-view-research', component: AdminViewResearchComponent, canActivate: [AdminGuard]},
  {path: 'admin-view-extension', component: AdminViewExtensionComponent, canActivate: [AdminGuard]},
  {path: 'admin-view-production', component: AdminViewProductionComponent, canActivate: [AdminGuard]},
  
  {path: 'admin-print-core', component: CorePrintComponent, canActivate: [AdminGuard]},  
  {path: 'admin-print-leadership', component: LeadershipPrintComponent, canActivate: [AdminGuard]},  
  {path: 'admin-print-instruction', component: InstructionPrintComponent, canActivate: [AdminGuard]},  
  {path: 'admin-print-research', component: ResearchPrintComponent, canActivate: [AdminGuard]},  
  {path: 'admin-print-extension', component: ExtensionPrintComponent, canActivate: [AdminGuard]},  
  {path: 'admin-print-production', component: ProductionPrintComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
