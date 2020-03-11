import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBan,
  faCalculator,
  faCalendar,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faClipboardCheck,
  faClipboardList,
  faEdit,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faFileDownload,
  faFileExport,
  faFileImport,
  faFileInvoice,
  faFileUpload,
  faFolderOpen,
  faHouseDamage,
  faRedo,
  faSearch,
  faTimes,
  faTimesCircle,
  faTrashAlt,
  faPen, faBars, faChevronLeft, faChartBar, faPrint
} from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private faIconLibrary: FaIconLibrary) { }

  initFaIcons(): void {
    this.faIconLibrary.addIcons(
      faFileImport,
      faFileDownload,
      faFileUpload,
      faFileExport,
      faFileInvoice,
      faCheck,
      faFolderOpen,
      faBan,
      faRedo,
      faCalculator,
      faExclamationTriangle,
      faTimes,
      faCalendar,
      faHouseDamage,
      faTimesCircle,
      faCheckCircle,
      faClipboardCheck,
      faClipboardList,
      faSearch,
      faChevronUp,
      faChevronDown,
      faEye,
      faEyeSlash,
      faPen,
      faBars,
      faChevronLeft,
      faChartBar,
      faPrint,
      faEdit,
      faTrashAlt
    );
  }
}
