import { CandidateDto } from './candidate.dto';

export interface CareersDto {
	careerId: number;
	careerParentId: number;
	careerSlug: string;
	careerImages: string;
	careerOrders: number;
	careerName: string;
	jobsList: Array<JobDetailDto>;
}
export interface JobDetailDto {
	careerDescription: string;
	companyId: number;
	groupId: number;
	companyEmail: string;
	companyAvatar: string;
	companyName: string;
	jobId: 3;
	careerId: number;
	careerName: string;
	jobSlug: string;
	jobWorkingHoursFrom: string;
	jobWorkingHoursTo: string;
	jobWorkingHoursStatus: number;
	jobAgeRequirementFrom: string;
	jobAgeRequirementTo: string;
	jobAgeRequirementStatus: number;
	jobLanguageSkills: number;
	jobSalaryFrom: string;
	jobSalaryTo: string;
	jobSalaryStatus: number;
	jobInsurance: string;
	provinceId: number;
	provinceName: string;
	cityId: number;
	jobRatings: number;
	cityName: string;
	jobFormatPage: number;
	jobReleaseDate: Date;
	jobExpirationDate: Date;
	jobThumbnail: string;
	jobLinkVideo: string;
	jobCustomizeCss: string;
	jobCustomizeJs: string;
	jobHotStatus: number;
	jobTopStatus: number;
	createdDate: Date;
	updatedDate: string;
	status: number;
	visibility: number;
	jobTitle: string;
	jobDescription: string;
	companyNumberOfEmployees: string;
	companyIndustry: string;
	companyEstablished: string;
	companyCharacteristics: string;
	jobPosition: string;
	jobEmploymentStatus: string;
	jobEmploymentPeriod: string;
	jobContent: string;
	jobRecruitmentBackground: string;
	jobWorkingLocation: string;
	jobNumberOfApplicants: string;
	jobRequiredAge: string;
	jobRequiredLanguagesSkills: string;
	jobSelectionProcess: string;
	jobWorkingHours: string;
	jobHolidays: string;
	jobWorkingOvertime: string;
	jobSalary: string;
	jobWelfare: string;
}

export interface AppliedCandidateDto {
	companyId: number;
	companyName: string;
	careerSlug: string;
	careerId: number;
	jobId: number;
	jobSlug: string;
	provinceId: number;
	provinceName: string;
	cityId: number;
	cityName: string;
	jobHotStatus: number;
	jobTopStatus: number;
	createdDate: Date;
	updatedDate: Date;
	status: number;
	visibility: number;
	careerName: string;
	careerDescription: string;
	appliedCandidatesList: CandidateDto[];
}