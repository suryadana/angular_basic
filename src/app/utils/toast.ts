import iziToast from 'izitoast';

export class Toast {

  success(msg: string, title: string = 'Success'): void {
    iziToast.success({
      title: title,
      message: msg,
      position: 'bottomCenter'
    });
  }

  warning(msg: string, title: string = 'Warning'): void {
    iziToast.warning({
      title: title,
      message: msg,
      position: 'bottomCenter'
    });
  }

  error(msg: string, title: string = 'Error'): void {
    iziToast.error({
      title: title,
      message: msg,
      position: 'bottomCenter'
    });
  }
}
