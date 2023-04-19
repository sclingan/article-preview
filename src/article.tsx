
export default function showSocial() {
    const social = document.getElementById('social');
    const profile = document.getElementById('profile');
    const button = document.getElementById('social-button');
    let screenWidth = window.innerWidth;

   
    // Tablet and Desktop
    if(screenWidth > 680){
        // If tooltip is shown, close tooltip
        if(social?.className === 'social-container') {
            social?.classList.remove('social-container');
            social?.classList.add('sr-only');
        } else {
            // Show tooltip
            button?.classList.remove('social-button');
            button?.classList.add('sr-only');
            social?.classList.remove('sr-only');
            social?.classList.add('social-container');
        }
    }
    
    // Mobile
    if(screenWidth < 680){
    // If profile is shown, slide in Icons
    if(profile?.className === 'profile-container') {
        profile?.classList.remove('profile-container');
        profile?.classList.add('sr-only');
        social?.classList.remove('sr-only');
        social?.classList.add('social-container');
    } else {
        // Hide Icons, show profile
        profile?.classList.remove('sr-only');
        profile?.classList.add('profile-container');
        social?.classList.remove('social-container');
        social?.classList.add('sr-only');
    }
  }
}