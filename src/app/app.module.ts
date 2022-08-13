import { AdminAssessmentListComponent } from './componenents/admin/assessment/admin-assessment-list/admin-assessment-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserAssessmentListComponent } from './componenents/user/assessment/user-assessment-list/user-assessment-list.component';
import { UserCoreCompetencyService } from 'src/app/services/user-core-competency.service';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenents/auth/login/login.component';
import { RegisterComponent } from './componenents/auth/register/register.component';
import { ResetComponent } from './componenents/auth/reset/reset.component';
import { ForgotComponent } from './componenents/auth/forgot/forgot.component';
import { BodyComponent } from './componenents/shared/body/body.component';
import { FooterComponent } from './componenents/shared/footer/footer.component';
import { DashboardComponent } from './componenents/admin/dashboard/dashboard.component';
import { HomeComponent } from './componenents/user/home/home.component';
import { UserNavBarComponent } from './componenents/user/user-nav-bar/user-nav-bar.component';
import { AdminNavBarComponent } from './componenents/admin/admin-nav-bar/admin-nav-bar.component';
import { NavBarComponent } from './componenents/shared/nav-bar/nav-bar.component';
import { ContactComponent } from './componenents/shared/contact/contact.component';
import { AboutComponent } from './componenents/shared/about/about.component';
import { UserListComponent } from './componenents/admin/user/user-list/user-list.component';
import { FeedbackListComponent } from './componenents/admin/feedback/feedback-list/feedback-list.component';
import { CreateUserComponent } from './componenents/admin/user/create-user/create-user.component';
import { UpdateUserComponent } from './componenents/admin/user/update-user/update-user.component';
import { DepartmentListComponent } from './componenents/admin/department/department-list/department-list.component';
import { CreateDepartmentComponent } from './componenents/admin/department/create-department/create-department.component';
import { UpdateDepartmentComponent } from './componenents/admin/department/update-department/update-department.component';
import { CollegeListComponent } from './componenents/admin/college/college-list/college-list.component';
import { CreateCollegeComponent } from './componenents/admin/college/create-college/create-college.component';
import { UpdateCollegeComponent } from './componenents/admin/college/update-college/update-college.component';
import { RankListComponent } from './componenents/admin/rank/rank-list/rank-list.component';
import { CreateRankComponent } from './componenents/admin/rank/create-rank/create-rank.component';
import { UpdateRankComponent } from './componenents/admin/rank/update-rank/update-rank.component';
import { AssessmentInstructionComponent } from './componenents/user/assessment/assessment-instruction/assessment-instruction.component';
import { CoreOneAComponent } from './componenents/user/core competency/core-one-a/core-one-a.component';
import { CoreOneBComponent } from './componenents/user/core competency/core-one-b/core-one-b.component';
import { CoreTwoAComponent } from './componenents/user/core competency/core-two-a/core-two-a.component';
import { CoreTwoBComponent } from './componenents/user/core competency/core-two-b/core-two-b.component';
import { CoreThreeAComponent } from './componenents/user/core competency/core-three-a/core-three-a.component';
import { CoreThreeBComponent } from './componenents/user/core competency/core-three-b/core-three-b.component';
import { CoreComponent } from './componenents/user/core competency/core/core.component';
import { LeadershipComponent } from './componenents/user/leadership competency/leadership/leadership.component';
import { InstructionComponent } from './componenents/user/instruction competency/instruction/instruction.component';
import { ResearchComponent } from './componenents/user/research competency/research/research.component';
import { ExtensionComponent } from './componenents/user/extension competency/extension/extension.component';
import { ProductionComponent } from './componenents/user/production competency/production/production.component';
import { LeadershipOneAComponent } from './componenents/user/leadership competency/leadership-one-a/leadership-one-a.component';
import { LeadershipOneBComponent } from './componenents/user/leadership competency/leadership-one-b/leadership-one-b.component';
import { LeadershipTwoAComponent } from './componenents/user/leadership competency/leadership-two-a/leadership-two-a.component';
import { LeadershipTwoBComponent } from './componenents/user/leadership competency/leadership-two-b/leadership-two-b.component';
import { LeadershipThreeAComponent } from './componenents/user/leadership competency/leadership-three-a/leadership-three-a.component';
import { LeadershipThreeBComponent } from './componenents/user/leadership competency/leadership-three-b/leadership-three-b.component';
import { LeadershipFourAComponent } from './componenents/user/leadership competency/leadership-four-a/leadership-four-a.component';
import { LeadershipFourBComponent } from './componenents/user/leadership competency/leadership-four-b/leadership-four-b.component';
import { LeadershipFiveAComponent } from './componenents/user/leadership competency/leadership-five-a/leadership-five-a.component';
import { LeadershipFiveBComponent } from './componenents/user/leadership competency/leadership-five-b/leadership-five-b.component';
import { InstructionOneAComponent } from './componenents/user/instruction competency/instruction-one-a/instruction-one-a.component';
import { InstructionOneBComponent } from './componenents/user/instruction competency/instruction-one-b/instruction-one-b.component';
import { InstructionTwoAComponent } from './componenents/user/instruction competency/instruction-two-a/instruction-two-a.component';
import { InstructionTwoBComponent } from './componenents/user/instruction competency/instruction-two-b/instruction-two-b.component';
import { InstructionThreeAComponent } from './componenents/user/instruction competency/instruction-three-a/instruction-three-a.component';
import { InstructionThreeBComponent } from './componenents/user/instruction competency/instruction-three-b/instruction-three-b.component';
import { InstructionFourAComponent } from './componenents/user/instruction competency/instruction-four-a/instruction-four-a.component';
import { InstructionFourBComponent } from './componenents/user/instruction competency/instruction-four-b/instruction-four-b.component';
import { InstructionFiveAComponent } from './componenents/user/instruction competency/instruction-five-a/instruction-five-a.component';
import { InstructionFiveBComponent } from './componenents/user/instruction competency/instruction-five-b/instruction-five-b.component';
import { InstructionSixAComponent } from './componenents/user/instruction competency/instruction-six-a/instruction-six-a.component';
import { InstructionSixBComponent } from './componenents/user/instruction competency/instruction-six-b/instruction-six-b.component';
import { InstructionSevenAComponent } from './componenents/user/instruction competency/instruction-seven-a/instruction-seven-a.component';
import { InstructionSevenBComponent } from './componenents/user/instruction competency/instruction-seven-b/instruction-seven-b.component';
import { UserViewCoreComponent } from './componenents/user/assessment/view/user-view-core/user-view-core.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserViewLeadershipComponent } from './componenents/user/assessment/view/user-view-leadership/user-view-leadership.component';
import { AdminViewCoreComponent } from './componenents/admin/assessment/view/admin-view-core/admin-view-core.component';
import { AdminViewLeadershipComponent } from './componenents/admin/assessment/view/admin-view-leadership/admin-view-leadership.component';
import { CoreResultComponent } from './componenents/admin/assessment/result/core-result/core-result.component';
import { LeadershipResultComponent } from './componenents/admin/assessment/result/leadership-result/leadership-result.component';
import { AdminViewInstructionComponent } from './componenents/admin/assessment/view/admin-view-instruction/admin-view-instruction.component';
import { InstructionResultComponent } from './componenents/admin/assessment/result/instruction-result/instruction-result.component';
import { UserViewInstructionComponent } from './componenents/user/assessment/view/user-view-instruction/user-view-instruction.component';
import { ResearchTwoAComponent } from './componenents/user/research competency/research-two-a/research-two-a.component';
import { ResearchTwoBComponent } from './componenents/user/research competency/research-two-b/research-two-b.component';
import { ResearchThreeAComponent } from './componenents/user/research competency/research-three-a/research-three-a.component';
import { ResearchThreeBComponent } from './componenents/user/research competency/research-three-b/research-three-b.component';
import { ResearchFourAComponent } from './componenents/user/research competency/research-four-a/research-four-a.component';
import { ResearchFourBComponent } from './componenents/user/research competency/research-four-b/research-four-b.component';
import { ResearchFiveAComponent } from './componenents/user/research competency/research-five-a/research-five-a.component';
import { ResearchFiveBComponent } from './componenents/user/research competency/research-five-b/research-five-b.component';
import { ResearchSixAComponent } from './componenents/user/research competency/research-six-a/research-six-a.component';
import { ResearchSixBComponent } from './componenents/user/research competency/research-six-b/research-six-b.component';
import { ProductionOneAComponent } from './componenents/user/production competency/production-one-a/production-one-a.component';
import { ProductionOneBComponent } from './componenents/user/production competency/production-one-b/production-one-b.component';
import { ProductionTwoAComponent } from './componenents/user/production competency/production-two-a/production-two-a.component';
import { ProductionTwoBComponent } from './componenents/user/production competency/production-two-b/production-two-b.component';
import { ProductionThreeAComponent } from './componenents/user/production competency/production-three-a/production-three-a.component';
import { ProductionThreeBComponent } from './componenents/user/production competency/production-three-b/production-three-b.component';
import { ProductionFourAComponent } from './componenents/user/production competency/production-four-a/production-four-a.component';
import { ProductionFourBComponent } from './componenents/user/production competency/production-four-b/production-four-b.component';
import { ExtensionOneAComponent } from './componenents/user/extension competency/extension-one-a/extension-one-a.component';
import { ExtensionOneBComponent } from './componenents/user/extension competency/extension-one-b/extension-one-b.component';
import { ExtensionTwoAComponent } from './componenents/user/extension competency/extension-two-a/extension-two-a.component';
import { ExtensionTwoBComponent } from './componenents/user/extension competency/extension-two-b/extension-two-b.component';
import { ExtensionThreeAComponent } from './componenents/user/extension competency/extension-three-a/extension-three-a.component';
import { ExtensionThreeBComponent } from './componenents/user/extension competency/extension-three-b/extension-three-b.component';
import { ExtensionFourAComponent } from './componenents/user/extension competency/extension-four-a/extension-four-a.component';
import { ExtensionFourBComponent } from './componenents/user/extension competency/extension-four-b/extension-four-b.component';
import { ExtensionFiveAComponent } from './componenents/user/extension competency/extension-five-a/extension-five-a.component';
import { ExtensionFiveBComponent } from './componenents/user/extension competency/extension-five-b/extension-five-b.component';
import { ExtensionSixAComponent } from './componenents/user/extension competency/extension-six-a/extension-six-a.component';
import { ExtensionSixBComponent } from './componenents/user/extension competency/extension-six-b/extension-six-b.component';
import { ResearchOneAComponent } from './componenents/user/research competency/research-one-a/research-one-a.component';
import { ResearchOneBComponent } from './componenents/user/research competency/research-one-b/research-one-b.component';
import { UserViewResearchComponent } from './componenents/user/assessment/view/user-view-research/user-view-research.component';
import { UserViewExtensionComponent } from './componenents/user/assessment/view/user-view-extension/user-view-extension.component';
import { UserViewProductionComponent } from './componenents/user/assessment/view/user-view-production/user-view-production.component';
import { AdminViewResearchComponent } from './componenents/admin/assessment/view/admin-view-research/admin-view-research.component';
import { AdminViewExtensionComponent } from './componenents/admin/assessment/view/admin-view-extension/admin-view-extension.component';
import { AdminViewProductionComponent } from './componenents/admin/assessment/view/admin-view-production/admin-view-production.component';
import { ResearchResultComponent } from './componenents/admin/assessment/result/research-result/research-result.component';
import { ExtensionResultComponent } from './componenents/admin/assessment/result/extension-result/extension-result.component';
import { ProductionResultComponent } from './componenents/admin/assessment/result/production-result/production-result.component';
import { DatePipe } from '@angular/common';
import { CorePrintComponent } from './componenents/admin/assessment/print/core-print/core-print.component';
import { LeadershipPrintComponent } from './componenents/admin/assessment/print/leadership-print/leadership-print.component';
import { InstructionPrintComponent } from './componenents/admin/assessment/print/instruction-print/instruction-print.component';
import { ResearchPrintComponent } from './componenents/admin/assessment/print/research-print/research-print.component';
import { ExtensionPrintComponent } from './componenents/admin/assessment/print/extension-print/extension-print.component';
import { ProductionPrintComponent } from './componenents/admin/assessment/print/production-print/production-print.component';
import { NgxPrintModule } from 'ngx-print';

export function tokenGetter(){
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ForgotComponent,
    BodyComponent,
    FooterComponent,
    AdminNavBarComponent,
    DashboardComponent,
    HomeComponent,
    UserNavBarComponent,
    NavBarComponent,
    ContactComponent,
    AboutComponent,
    UserListComponent,
    FeedbackListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    DepartmentListComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
    CollegeListComponent,
    CreateCollegeComponent,
    UpdateCollegeComponent,
    RankListComponent,
    CreateRankComponent,
    UpdateRankComponent,
    UserAssessmentListComponent,
    AdminAssessmentListComponent,
    AssessmentInstructionComponent,
    CoreOneAComponent,
    CoreOneBComponent,
    CoreTwoAComponent,
    CoreTwoBComponent,
    CoreThreeAComponent,
    CoreThreeBComponent,
    CoreComponent,
    LeadershipComponent,
    InstructionComponent,
    ResearchComponent,
    ExtensionComponent,
    ProductionComponent,
    LeadershipOneAComponent,
    LeadershipOneBComponent,
    LeadershipTwoAComponent,
    LeadershipTwoBComponent,
    LeadershipThreeAComponent,
    LeadershipThreeBComponent,
    LeadershipFourAComponent,
    LeadershipFourBComponent,
    LeadershipFiveAComponent,
    LeadershipFiveBComponent,
    InstructionOneAComponent,
    InstructionOneBComponent,
    InstructionTwoAComponent,
    InstructionTwoBComponent,
    InstructionThreeAComponent,
    InstructionThreeBComponent,
    InstructionFourAComponent,
    InstructionFourBComponent,
    InstructionFiveAComponent,
    InstructionFiveBComponent,
    InstructionSixAComponent,
    InstructionSixBComponent,
    InstructionSevenAComponent,
    InstructionSevenBComponent,
    UserViewCoreComponent,
    UserViewLeadershipComponent,
    AdminViewCoreComponent,
    AdminViewLeadershipComponent,
    CoreResultComponent,
    LeadershipResultComponent,
    AdminViewInstructionComponent,
    InstructionResultComponent,
    UserViewInstructionComponent,
    ResearchOneAComponent,
    ResearchOneBComponent,
    ResearchTwoAComponent,
    ResearchTwoBComponent,
    ResearchThreeAComponent,
    ResearchThreeBComponent,
    ResearchFourAComponent,
    ResearchFourBComponent,
    ResearchFiveAComponent,
    ResearchFiveBComponent,
    ResearchSixAComponent,
    ResearchSixBComponent,
    ProductionOneAComponent,
    ProductionOneBComponent,
    ProductionTwoAComponent,
    ProductionTwoBComponent,
    ProductionThreeAComponent,
    ProductionThreeBComponent,
    ProductionFourAComponent,
    ProductionFourBComponent,
    ExtensionOneAComponent,
    ExtensionOneBComponent,
    ExtensionTwoAComponent,
    ExtensionTwoBComponent,
    ExtensionThreeAComponent,
    ExtensionThreeBComponent,
    ExtensionFourAComponent,
    ExtensionFourBComponent,
    ExtensionFiveAComponent,
    ExtensionFiveBComponent,
    ExtensionSixAComponent,
    ExtensionSixBComponent,
    UserViewResearchComponent,
    UserViewExtensionComponent,
    UserViewProductionComponent,
    AdminViewResearchComponent,
    AdminViewExtensionComponent,
    AdminViewProductionComponent,
    ResearchResultComponent,
    ExtensionResultComponent,
    ProductionResultComponent,
    CorePrintComponent,
    LeadershipPrintComponent,
    InstructionPrintComponent,
    ResearchPrintComponent,
    ExtensionPrintComponent,
    ProductionPrintComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://hrdmocompetencyapp.azurewebsites.net"],
        disallowedRoutes: []
      }
    }),
    MatProgressBarModule,
    MatCardModule,
    FormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    MatDialogModule,
    NgxPrintModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptorService,multi:true},
    UserCoreCompetencyService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
