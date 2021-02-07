import { makeStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Avatar, CardActionArea, Typography, IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';


const useStyle = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },

    subheader: {
        display: 'flex',
        alignItems: 'center',
    },

    caption: {
        marginRight: theme.spacing(1)
    },

    hashtag: {
        marginLeft: theme.spacing(2),
    },

    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px'
    },

    image: {
        height: 300,
        width: '100%',
        maxWidth: 1200
    },

    content: {
        padding: 0
    },
    separator: {
        margin: 'auto'
    }

}));

function PostCard({ post }) {
    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardHeader
                title={
                    <Typography variant="h6">
                        {post.title}
                    </Typography>
                }

                avatar={
                    <Avatar src={post.author.avatar} />
                }

                subheader={
                    <div className={classes.subheader}>
                        <Typography variant="caption" className={classes.caption}>
                            Avaliado por
                        </Typography>
                        <Typography variant="subtitle2" className={classes.caption}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.caption}>
                            {post.date}
                        </Typography>
                    </div>
                }
            />

            <CardContent className={classes.content}>
                <Typography
                    variant="body1"
                    style={{
                        marginBottom: 8
                    }}
                >
                    {post.hashtags.map(hashtag => (
                        <span className={classes.hashtag}>#{hashtag}</span>
                    ))}
                </Typography>

                <CardActionArea>
                    <img src={post.image} className={classes.image} alt={'image: ' + post.title} />
                </CardActionArea>

            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    <Typography color="textSecondary" variant="body2">10</Typography>
                </IconButton>
                <IconButton aria-label="add to message">
                    <MessageIcon />
                    <Typography color="textSecondary" variant="body2">10</Typography>
                </IconButton>

                <div className={classes.separator}></div>

                <IconButton aria-label="bookmark of feed">
                    <BookmarkIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default PostCard;