export class AppConstants {

  private static baseUrl = 'https://music-all-back.herokuapp.com/api';

  public static get api_login_url(): string {
    return this.baseUrl + '/auth/signin';
  }

  public static get api_refresh_url(): string {
    return this.baseUrl + '/user/profile/me';
  }

  public static get api_signup_url(): string {
    return this.baseUrl + '/auth/signup';
  }

  public static get appTitle(): string {
    return 'Music\'All';
  }

  public static get assetLogoPath(): string {
    return 'assets/img/Logo-musicall-blanc.png';
  }

  public static get assetFaviLogoPath(): string {
    return 'assets/img/Favicon-blanc.png';
  }

  public static get leftSideData(): {}[] {
    const leftSideData = [
      {
        label: 'Fil d\'actualité',
        url: 'assets/img/globe-solid.png',
        route: '#'
      },
      {
        label: 'Store',
        url: 'assets/img/store-solid.png',
        route: '#'
      },
      {
        label: 'Articles',
        url: 'assets/img/newspaper-solid.png',
        route: '#'
      },
      {
        label: 'Evènements',
        url: 'assets/img/event.png',
        route: '#'
      },
      {
        label: 'Groupes',
        url: 'assets/img/users.png',
        route: '#'
      },
      {
        label: 'Paramètres',
        url: 'assets/img/gear2-1B5A86.png',
        route: '#'
      }
    ];
    return leftSideData;
  }

  public static get assetHelpLogoPath(): {}[] {
    const helpAssetData = [
      {
        label: 'Aide',
        url: 'assets/img/help-1B5A86.png',
        route: '#'
      }
    ];
    return helpAssetData;
  }
}
