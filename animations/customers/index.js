const onMouseEnter = () => { 
    const logoContainer = document.getElementsByClassName('customers__logos')[0];
    logoContainer.classList.remove('growing');
    logoContainer.classList.add('shrinking');

    const overlay = document.getElementsByClassName('customers__overlay')[0];
    overlay.classList.remove('hiding');
    overlay.classList.add('showing');
}

const onMouseLeave = () => { 
    const logoContainer = document.getElementsByClassName('customers__logos')[0];
    logoContainer.classList.remove('shrinking');
    logoContainer.classList.add('growing');

    const overlay = document.getElementsByClassName('customers__overlay')[0];
    overlay.classList.remove('showing');
    overlay.classList.add('hiding');
}
