/**
 * @file setAvatar command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message, args) => {
  if (!/^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png|bmp)$/i.test(args.join(' '))) {
    return Bastion.emit('commandUsage', message, this.help);
  }

  await Bastion.user.setAvatar(args.join(' '));

  await message.channel.send({
    embed: {
      color: Bastion.colors.GREEN,
      description: `${Bastion.user.username}'s avatar changed!`
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'setav' ],
  enabled: true,
  ownerOnly: true
};

exports.help = {
  name: 'setAvatar',
  description: 'Sets the avatar of %bastion%.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'setavatar <image_url>',
  example: [ 'setavatar https://example.com/avatar.jpeg' ]
};
