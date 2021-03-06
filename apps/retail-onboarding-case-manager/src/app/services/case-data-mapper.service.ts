import { Injectable } from '@angular/core';
import { CaseDataMapper, CaseDataWithApplicants } from '@backbase/ds-core-ang/services';

@Injectable()
export class CaseDataMapperService implements CaseDataMapper {
  transform(caseData: {
    mainApplicant: Record<string, unknown>;
    coApplicant?: Record<string, unknown>;
  }): CaseDataWithApplicants {
    let applicants = [caseData.mainApplicant];
    if (caseData.coApplicant) {
      applicants = [...applicants, caseData.coApplicant];
    }
    return { ...caseData, applicants };
  }
}
